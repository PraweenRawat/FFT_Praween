import React from 'react';

function StudentList({ students, onViewStudent, onDeleteStudent }) {
  return (
    <div className="card list-container">
      <div className="list-header">
        <h2>Student Records</h2>
        <span className="badge-count">Total Students: {students.length}</span>
      </div>

      {/* Conditional rendering: check if student list is empty */}
      {students.length === 0 ? (
        <div className="empty-state">
          <p>No students found. Please add a student using the form above.</p>
        </div>
      ) : (
        <div className="table-responsive">
          <table className="student-table">
            <thead>
              <tr>
                <th>Student ID</th>
                <th>Name</th>
                <th>Course</th>
                <th>Email</th>
                <th>Phone</th>
                <th style={{ textAlign: 'center' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Using map() to render each student row */}
              {students.map((student) => (
                <tr key={student.id}>
                  <td><strong>{student.id}</strong></td>
                  <td>{student.name}</td>
                  <td>{student.course}</td>
                  <td>{student.email}</td>
                  <td>{student.phone}</td>
                  <td style={{ textAlign: 'center' }}>
                    <button
                      type="button"
                      className="btn btn-view"
                      onClick={() => onViewStudent(student)}
                    >
                      View
                    </button>
                    <button
                      type="button"
                      className="btn btn-delete"
                      onClick={() => onDeleteStudent(student.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default StudentList;
