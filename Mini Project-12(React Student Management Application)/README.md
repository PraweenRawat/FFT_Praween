# Student Management System

A beginner-friendly React application developed for a college practical assignment to display and manage student records.

---

## 📌 Features

1. **Add Student:**
   - Form to input Name, Course, Email, and Phone number.
   - Validation for empty fields, valid email format, and 10-digit phone number.
   - Automatically generates a unique Student ID (e.g., `STU-104`).
   - Clears the form and shows a success alert upon submission.

2. **Display Student List:**
   - Displays all students in a clean, responsive HTML table.
   - Includes default sample records for testing.
   - Shows a friendly message when no records exist.

3. **View Student Details:**
   - Clicking the **View** button displays the full student details inside a focused modal popup.
   - Can be closed with the "Close" button or the "&times;" cross icon.

4. **Delete Student:**
   - Clicking the **Delete** button prompts for confirmation and removes the student record from state.

---

## 🚀 How to Run the Project

1. Open your terminal / command prompt.
2. Navigate to the project directory:
   ```bash
   cd D:\react_management
   ```
3. Install dependencies (if not already done):
   ```bash
   npm install
   ```
4. Start the Vite development server:
   ```bash
   npm run dev
   ```
5. Open your web browser and navigate to the local URL shown in your terminal (typically `http://localhost:5173`).

---

## 📂 Project Structure

```
react_management/
├── index.html                  # HTML entry point with page title
├── package.json                # Project dependencies and scripts
├── vite.config.js              # Vite configuration
└── src/
    ├── main.jsx                # Application root rendering App component
    ├── App.jsx                 # Main state holder (students list, modal state)
    ├── App.css                 # Clean CSS styling for components and table
    ├── index.css               # Global base styles and reset
    └── components/
        ├── StudentForm.jsx     # Controlled form component with validation
        ├── StudentList.jsx     # Table view rendering student rows with map()
        └── StudentDetails.jsx  # Modal popup displaying individual student details
```

---

## 🎓 Key React Concepts to Explain in Viva / Practical

1. **Functional Components:** All components (`App`, `StudentForm`, `StudentList`, `StudentDetails`) are written as modern JavaScript functions returning JSX.
2. **useState Hook:**
   - In `App.jsx`: `students` manages the list of students, `selectedStudent` manages which student details are shown, and `nextIdNumber` generates automatic IDs.
   - In `StudentForm.jsx`: individual states (`name`, `course`, `email`, `phone`, `errorMessage`) manage controlled form inputs.
3. **Props:** Used to pass data and callback functions from parent (`App.jsx`) to children (e.g. `onAddStudent`, `onViewStudent`, `onDeleteStudent`, `onClose`).
4. **Conditional Rendering:**
   - Renders "No students found" if `students.length === 0`.
   - Renders the `StudentDetails` modal only when `selectedStudent` is not `null`.
5. **Array `map()` Method:** Iterates through the `students` array to generate dynamic `<tr>` table rows.
