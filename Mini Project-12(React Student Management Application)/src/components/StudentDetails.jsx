import React from 'react';

function StudentDetails({ student, onClose }) {
  // If no student is selected, do not render anything
  if (!student) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Student Details</h3>
          <button type="button" className="close-x" onClick={onClose}>
            &times;
          </button>
        </div>

        <div className="details-body">
          <div className="detail-row">
            <span className="detail-label">Student ID:</span>
            <span className="detail-value id-tag">{student.id}</span>
          </div>

          <div className="detail-row">
            <span className="detail-label">Full Name:</span>
            <span className="detail-value">{student.name}</span>
          </div>

          <div className="detail-row">
            <span className="detail-label">Course:</span>
            <span className="detail-value">{student.course}</span>
          </div>

          <div className="detail-row">
            <span className="detail-label">Email:</span>
            <span className="detail-value">{student.email}</span>
          </div>

          <div className="detail-row">
            <span className="detail-label">Phone:</span>
            <span className="detail-value">{student.phone}</span>
          </div>
        </div>

        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudentDetails;
