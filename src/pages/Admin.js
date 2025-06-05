import React, { useState } from "react";
import { Link } from "react-router-dom"; // Add this line
import "../styles/Admin.css";

function Admin() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phone: "",
        timeZone: "",
        about: "",
        isAdult: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = () => {
        console.log("Caregiver Signup:", formData);
        alert("Signup successful!");
    };

    return (
        <div className="admin-form-container">
            <header className="admin-header">
                <h1>CareConnect</h1>
                <nav>
                    <Link to="/caregivers">Caregivers</Link>
                    <Link to="/jobs">Jobs</Link>
                    <Link to="/resources">Resources</Link>
                    <Link to="/community">Community</Link>
                    <button className="login-btn">Login</button>
                    <button className="signup-btn">Sign up</button>
                </nav>
            </header>

            <main className="admin-form">
                <h2>Become a caregiver</h2>

                <label>First name</label>
                <input
                    type="text"
                    name="firstName"
                    placeholder="Enter your first name"
                    value={formData.firstName}
                    onChange={handleChange}
                />

                <label>Last name</label>
                <input
                    type="text"
                    name="lastName"
                    placeholder="Enter your last name"
                    value={formData.lastName}
                    onChange={handleChange}
                />

                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                />

                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={handleChange}
                />

                <label>Phone number</label>
                <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                />

                <label>Time zone</label>
                <select
                    name="timeZone"
                    value={formData.timeZone}
                    onChange={handleChange}
                >
                    <option value="">Select your time zone</option>
                    <option value="IST">IST (India)</option>
                    <option value="EST">EST (Eastern)</option>
                    <option value="PST">PST (Pacific)</option>
                    <option value="GMT">GMT</option>
                </select>

                <label>Tell us about yourself</label>
                <textarea
                    name="about"
                    placeholder="Share your experience, availability, and anything else that helps us get to know you."
                    value={formData.about}
                    onChange={handleChange}
                />

                <label className="checkbox-label">
                    <input
                        type="checkbox"
                        name="isAdult"
                        checked={formData.isAdult}
                        onChange={handleChange}
                    />
                    I am 18 years or older
                </label>

                <button className="submit-button" onClick={handleSubmit}>Sign up</button>
            </main>
        </div>
    );
}

export default Admin;
