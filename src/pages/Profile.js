import React, { useState } from "react";
import "../styles/profile.css"; // ✅ Ensure the case matches

const Profile = () => {
  const [profile, setProfile] = useState({
    bio: "",
    experience: "",
    qualifications: "",
    photo: null,
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handlePhotoUpload = (e) => {
    setProfile({ ...profile, photo: e.target.files[0] });
  };

  const handleSubmit = () => {
    console.log("Profile saved:", profile);
    alert("Profile saved!");
  };

  return (
    <div className="profile-container">
      <aside className="sidebar">
        <ul>
          <li>Dashboard</li>
          <li>Appointments</li>
          <li>Earnings</li>
          <li className="active">Profile</li>
        </ul>
      </aside>

      <main className="profile-content">
        <h2>Profile</h2>
        <p className="intro">
          Your profile is the first thing families see when they search for and book caregivers.
          The more complete it is, the more likely you are to get booked.
        </p>

        <div className="card">
          <div className="photo-upload">
            <label htmlFor="photoUpload" className="photo-label">
              📷 Add a profile photo
            </label>
            <input
              type="file"
              id="photoUpload"
              onChange={handlePhotoUpload}
              style={{ display: "none" }}
            />
          </div>

          <div className="form-group">
            <label>Bio</label>
            <textarea
              name="bio"
              value={profile.bio}
              onChange={handleChange}
              placeholder="Tell us about yourself..."
            />
          </div>

          <div className="form-group">
            <label>Experience</label>
            <textarea
              name="experience"
              value={profile.experience}
              onChange={handleChange}
              placeholder="Your caregiving experience..."
            />
          </div>

          <div className="form-group">
            <label>Qualifications</label>
            <textarea
              name="qualifications"
              value={profile.qualifications}
              onChange={handleChange}
              placeholder="Certifications, degrees, etc."
            />
          </div>

          <button className="save-button" onClick={handleSubmit}>
            Save
          </button>
        </div>
      </main>
    </div>
  );
};

export default Profile;
