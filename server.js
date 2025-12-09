// Note: Below is the backend implementation for the "Next Generation" institute website. I've used Node.js with Express.js for the server, MongoDB with Mongoose for the database, bcrypt for password hashing, and JWT for authentication. This backend provides APIs for user registration, login, contact form submission, fetching courses, and enrolling in courses.

// Assumptions:
// - MongoDB is running locally or on a cloud service (e.g., MongoDB Atlas). Replace the connection string in the code.
// - Install dependencies: npm init -y && npm install express mongoose bcryptjs jsonwebtoken cors body-parser dotenv
// - Create a .env file with: JWT_SECRET=your_secret_key, MONGO_URI=mongodb://localhost:27017/nextgen
// - Courses are hardcoded for simplicity; you can extend to store in DB.
// - Run the server: node server.js
// - Frontend should make API calls to http://localhost:5000/api/...

// File: server.js
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// server.js ke upar wala part (line 20-30 ke aas-paas)

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// User Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'student' }, // student or admin
  course: { type: String }, // Enrolled course
});

const User = mongoose.model('User', userSchema);

// Contact Schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const Contact = mongoose.model('Contact', contactSchema);

// Enrollment Schema (for tracking enrollments)
const enrollmentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  course: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const Enrollment = mongoose.model('Enrollment', enrollmentSchema);

// Hardcoded courses (can be moved to DB later)
const courses = [
  { id: 1, title: 'Web Development', desc: 'HTML, CSS, JS, Bootstrap & React — 3 months.' },
  { id: 2, title: 'Graphic Design', desc: 'Photoshop, Illustrator, Figma — 2.5 months.' },
  { id: 3, title: 'App Development', desc: 'Flutter, Firebase — 4 months.' },
  { id: 4, title: 'Advanced React', desc: 'Hooks, Redux, Next.js — 2 months.' },
  { id: 5, title: 'UI/UX Design', desc: 'Figma, Adobe XD — 3 months.' },
  { id: 6, title: 'iOS Development', desc: 'Swift, Xcode — 4 months.' },
  { id: 7, title: 'Digital Marketing', desc: 'SEO, Social Media, Ads — 2 months.' },
];

// Middleware for authentication
const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

// Routes

// Register User
app.post('/api/register', async (req, res) => {
  const { name, phone, email, password, course } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: 'User already exists' });

    user = new User({ name, phone, email, password, course });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload = { user: { id: user.id, role: user.role } };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

// Login User
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

    const payload = { user: { id: user.id, role: user.role } };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

// Contact Form Submission
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    const contact = new Contact({ name, email, subject, message });
    await contact.save();
    res.json({ msg: 'Message sent successfully' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

// Get All Courses
app.get('/api/courses', (req, res) => {
  res.json(courses);
});

// Enroll in Course (Authenticated)
app.post('/api/enroll', authMiddleware, async (req, res) => {
  const { course } = req.body;
  const userId = req.user.id;

  try {
    const enrollment = new Enrollment({ userId, course });
    await enrollment.save();

    // Update user's course (optional)
    await User.findByIdAndUpdate(userId, { course });

    res.json({ msg: 'Enrolled successfully' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

// Get User Profile (Authenticated)
app.get('/api/profile', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

// Admin: Get All Contacts (Authenticated, Admin only)
app.get('/api/admin/contacts', authMiddleware, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ msg: 'Access denied' });

  try {
    const contacts = await Contact.find().sort({ date: -1 });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

// Admin: Get All Users (Authenticated, Admin only)
app.get('/api/admin/users', authMiddleware, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ msg: 'Access denied' });

  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// To integrate with frontend:
// - In React, use axios or fetch to call these endpoints.
// - For login/register: Store JWT in localStorage.
// - For protected routes: Send Authorization header with Bearer token.
// - Update forms in Signup, Login, Contact to POST to these APIs.
// - For Courses: Fetch from /api/courses and display.
// - Add admin dashboard in frontend if needed, using /api/admin endpoints.

// Security Notes: In production, use HTTPS, validate inputs more strictly, handle errors better, and use refresh tokens for JWT.
// Extend as needed: Add more schemas for courses, payments, etc.