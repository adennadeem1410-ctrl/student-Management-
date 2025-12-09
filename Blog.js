// File: src/pages/Blog.js (Enhanced with better styling: added cards with shadows, hover effects, better typography)
import React from 'react';

export default function Blog() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4" style={{ color: '#0055A4', fontWeight: 'bold' }}>Blog</h2>
        <p className="text-muted text-center mb-5">Latest articles and learning tips.</p>
        <div className="row justify-content-center">
          <div className="col-md-6 mb-4">
            <article className="card shadow-lg border-0" style={{ transition: 'transform 0.3s', borderRadius: '10px' }}>
              <div className="card-body p-4">
                <h5 className="card-title" style={{ color: '#0055A4' }}>Article Title</h5>
                <p className="card-text text-muted">Short excerpt of the article.</p>
                <a href="#" className="btn btn-primary btn-sm">Read More</a>
              </div>
            </article>
          </div>
          {/* Add more articles if needed */}
        </div>
      </div>
    </section>
  );
}