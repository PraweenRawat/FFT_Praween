import React, { useState } from 'react';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import StudentDetails from './components/StudentDetails';
import './App.css';

// Initial sample data for demonstration
const initialStudents = [
  {
    id: 'STU-101',
    name: 'Aarav Sharma',
    course: 'B.Tech (CSE)',
    email: 'aarav.sharma@example.com',
    phone: '9876543210'
  },
  {
    id: 'STU-102',
    name: 'Diya Patel',
    course: 'BCA',
    email: 'diya.patel@example.com',
    phone: '9812345678'
  },
  {
    id: 'STU-103',
    name: 'Rohan Verma',
    course: 'B.Sc (IT)',
    email: 'rohan.verma@example.com',
    phone: '9123456780'
  }
];

function App() {
  // 1. State for managing the list of students
  const [students, setStudents] = useState(initialStudents);

  // 2. Counter state for generating automatic student IDs (e.g. STU-104, STU-105)
  const [nextIdNumber, setNextIdNumber] = useState(104);

  // 3. State for the currently selected student to view in details modal
  const [selectedStudent, setSelectedStudent] = useState(null);

  // 4. State for showing a brief success message
  const [successMessage, setSuccessMessage] = useState('');

  // Function to add a new student
  const handleAddStudent = (newStudentData) => {
    // Generate simple automatic Student ID
    const generatedId = `STU-${nextIdNumber}`;

    const studentWithId = {
      id: generatedId,
      ...newStudentData
    };

    // Update the students list with the new student
    setStudents([...students, studentWithId]);

    // Increment ID counter for next addition
    setNextIdNumber((prevId) => prevId + 1);

    // Show success feedback
    setSuccessMessage(`Student ${newStudentData.name} (${generatedId}) added successfully!`);
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  // Function to view student details
  const handleViewStudent = (student) => {
    setSelectedStudent(student);
  };

  // Function to delete a student by ID
  const handleDeleteStudent = (id) => {
    const isConfirmed = window.confirm('Are you sure you want to delete this student?');
    if (isConfirmed) {
      // Filter out the student with matching ID
      const updatedStudents = students.filter((student) => student.id !== id);
      setStudents(updatedStudents);

      // If the currently viewed student is deleted, close the details modal
      if (selectedStudent && selectedStudent.id === id) {
        setSelectedStudent(null);
      }
    }
  };

  // Function to close the details modal
  const handleCloseDetails = () => {
    setSelectedStudent(null);
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="app-header">
        <h1>Student Management System</h1>
        <p className="app-subtitle">React Practical Project</p>
      </header>

      {/* Success Notification */}
      {successMessage && (
        <div className="alert-success">
          {successMessage}
        </div>
      )}

      {/* Main Content Area */}
      <main className="app-main">
        {/* Component 1: Student Form */}
        <StudentForm onAddStudent={handleAddStudent} />

        {/* Component 2: Student List Table */}
        <StudentList
          students={students}
          onViewStudent={handleViewStudent}
          onDeleteStudent={handleDeleteStudent}
        />
      </main>

      {/* Component 3: Student Details Modal (Conditionally rendered) */}
      <StudentDetails
        student={selectedStudent}
        onClose={handleCloseDetails}
      />

      {/* Simple Footer */}
      <footer className="app-footer">
        <p>College Practical Assignment &bull; Built with React &amp; Vite</p>
      </footer>
    </div>
  );
}

export default App;
