Hospital Management System

Project Overview

The Hospital Management System is a software solution designed to streamline hospital operations. It includes modules for patient management, appointment scheduling and doctor management ensuring efficient and user-friendly workflows.

Features

Patient Management: Add, update, and delete patient records.

Doctor Management: Maintain doctor profiles and specialties.

Appointment Scheduling: Schedule and manage patient appointments.

Billing System: Generate and manage bills for hospital services.

User Roles: Role-based access for administrators, doctors, and receptionists.

Technologies Used

Backend: Java (Spring Boot framework)

Frontend: HTML, CSS, JavaScript (or React/Angular, if applicable)

Database: MySQL

Version Control: Git and GitHub

Installation Instructions

Clone the repository:

git clone https://github.com/your-username/hospital-management-system.git

Navigate to the project directory:

cd hospital-management-system

Set up the database:

Create a MySQL database named hospital_db.

Run the provided SQL script (hospital_db.sql) to create tables.

Configure the application:

Update database credentials in the application.properties file.

Build and run the application:

mvn spring-boot:run

Access the application at http://localhost:8080.

Usage Instructions

Log in using the admin account.

Navigate to the desired module (e.g., Patients, Doctors, Appointments).

Perform CRUD operations based on user roles and permissions.

Project Structure

Hospital-Management-System/
|— src/
   |— main/
       |— java/
           |— com.hospital/
               |— controller/
               |— model/
               |— repository/
       |— resources/
           |— templates/
           |— static/

Contact

For any queries or support, please contact:

Name: Prajwal Sapat

Email: prajwalsapat19@gmail.com

