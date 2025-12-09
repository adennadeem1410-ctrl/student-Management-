import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Courses from './pages/Courses';
import Management from './pages/Login';
import About from './pages/About';
import SignIn from './pages/Signup';


export default function App() {
return (
<div className="app-root d-flex flex-column min-vh-100">
<Navbar />
<main className="flex-grow-1">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/blog" element={<Blog />} />
<Route path="/contact" element={<Contact />} />
<Route path="/courses" element={<Courses />} />
<Route path="/management" element={<Management />} />
<Route path="/about" element={<About />} />
<Route path="/signin" element={<SignIn />} />
</Routes>
</main>
<Footer />
</div>
);
}