
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <header className="navbar">
        <div className="logo">Care Connect</div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/caregivers">Caregivers</Link>
          <Link to="/services">Services</Link>
          <Link to="/guides">Guides</Link>
        </nav>
        <div className="nav-actions">
          <input type="text" placeholder="Search" />
          <button className="btn-white">Get Care</button>
          <Link to="/login" className="btn-outline">Sign Up / Log In</Link>
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>Your loved ones deserve the best care.</h1>
          <p>Find qualified caregivers and support services today.</p>
          <div className="search-bar">
            <input type="text" placeholder="Search for care" />
            <button className="btn-blue">Go</button>
          </div>
        </div>
      </section>

      <section className="care-types">
        <div className="header-row">
          <h2>Explore Types of Care</h2>
          <button className="btn-blue">Learn More</button>
        </div>
        <div className="card-grid">
          {[
            { title: "In-home Care", desc: "Caregivers can help with daily tasks, provide companionship, and offer support." },
            { title: "Companionship", desc: "Caregivers offer emotional support, engage in activities, and more." },
            { title: "Memory Care", desc: "Help for dementia, Alzheimer’s, and memory-related conditions." },
            { title: "Respite Care", desc: "Short-term care to give family caregivers a break." }
          ].map((item, index) => (
            <div className="card" key={index}>
              <img src={`https://via.placeholder.com/300x200?text=${item.title}`} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="caregivers">
        <h2>Featured Caregivers</h2>
        <div className="card-grid">
          {[
            { name: "Vishal", role: "Experienced caregiver" },
            { name: "Rohan", role: "Certified nursing assistant" },
            { name: "Anshul", role: "Specializes in memory care" },
            { name: "Rohan", role: "Offers respite care" }
          ].map((cg, index) => (
            <div className="card" key={index}>
              <img src={`https://via.placeholder.com/150?text=${cg.name}`} alt={cg.name} />
              <h3>{cg.name}</h3>
              <p>{cg.role}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <h2>Ready to find care that's right for you?</h2>
        <button className="btn-blue">Get Started</button>
      </footer>
    </div>
  );
};

export default Dashboard;
