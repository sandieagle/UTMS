import React from "react";
import Footer from "./Footer"; 
import "./More.css"; // Import CSS file for styling

const More = () => {
  return (
    <div>
      <div className="space1"></div>
      <div className="space2"></div>
    <div className="more-container">
      <div className="background-image"></div> {/* Background image */}
      <div className="content">
        <h1 className="header">University Task Management System</h1>
        <p>
          Welcome to the University Task Management System (UTMS)! UTMS is a comprehensive application designed to streamline task management for universities, enabling efficient collaboration between employees and administrators.
        </p>
        <h2 className="sub-header">Key Features</h2>
        <ul>
          <li><strong>Employee Task Management:</strong> Employees can create, update, and track their tasks efficiently using UTMS. They can set deadlines, prioritize tasks, and collaborate with colleagues.</li>
          <li><strong>Admin Task Management:</strong> Administrators have access to advanced features for overseeing tasks across departments. They can assign tasks, monitor progress, and generate reports to track productivity.</li>
          <li><strong>Dashboard:</strong> UTMS provides a centralized dashboard for both employees and administrators to view task statuses, upcoming deadlines, and important announcements.</li>
          <li><strong>Notifications:</strong> Users receive notifications for task assignments, deadline reminders, and updates, ensuring timely communication and action.</li>
          <li><strong>Security:</strong> UTMS prioritizes data security and confidentiality. It employs robust authentication mechanisms and encryption protocols to safeguard sensitive information.</li>
        </ul>
        <h2 className="sub-header">How to Get Started</h2>
        <ol>
          <li><strong>Register:</strong> Employees and administrators can register for UTMS using their university email addresses.</li>
          <li><strong>Login:</strong> Once registered, users can log in to UTMS using their credentials to access the dashboard and begin managing tasks.</li>
          <li><strong>Create Tasks:</strong> Employees can create tasks, set deadlines, and assign priorities. Administrators can assign tasks to departments and monitor progress.</li>
          <li><strong>Collaborate:</strong> UTMS facilitates seamless collaboration through task comments, file attachments, and real-time updates.</li>
          <li><strong>Stay Organized:</strong> Use UTMS to stay organized, track deadlines, and ensure timely completion of tasks.</li>
        </ol>
        <p>
          We hope UTMS enhances productivity and efficiency within your university community. For any inquiries or assistance, please contact our support team.
        </p>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default More;
