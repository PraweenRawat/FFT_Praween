import React, { useState } from 'react';

function StudentForm({ onAddStudent }) {
  // State for form input fields
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // State to display validation error messages
  const [errorMessage, setErrorMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Check if any field is empty
    if (!name.trim() || !course.trim() || !email.trim() || !phone.trim()) {
      setErrorMessage('Please fill in all the required fields.');
      return;
    }

    // 2. Validate Email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setErrorMessage('Please enter a valid email address (e.g., student@example.com).');
      return;
    }

    // 3. Validate Phone number (basic 10-digit check)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone.trim())) {
      setErrorMessage('Please enter a valid 10-digit phone number.');
      return;
    }

    // Pass new student data to parent component (App.jsx)
    onAddStudent({
      name: name.trim(),
      course: course.trim(),
      email: email.trim(),
      phone: phone.trim()
    });

    // Clear form inputs and any error message
    setName('');
    setCourse('');
    setEmail('');
    setPhone('');
    setErrorMessage('');
  };

  return (
    <div className="card form-container">
      <h2>Add New Student</h2>

      {/* Show error message if validation fails */}
      {errorMessage && <div className="alert-error">{errorMessage}</div>}

      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="studentName">Student Name:</label>
            <input
              type="text"
              id="studentName"
              placeholder="Enter full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="studentCourse">Course:</label>
            <input
              type="text"
              id="studentCourse"
              placeholder="e.g., BCA, B.Tech, B.Sc"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="studentEmail">Email Address:</label>
            <input
              type="email"
              id="studentEmail"
              placeholder="e.g., rahul@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="studentPhone">Phone Number:</label>
            <input
              type="tel"
              id="studentPhone"
              placeholder="10-digit mobile number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          + Add Student
        </button>
      </form>
    </div>
  );
}

export default StudentForm;
