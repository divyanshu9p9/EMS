# Employee Management System (EMS)

## Project Overview
The Employee Management System (EMS) is a full-stack web application designed to manage employee information efficiently. Users can perform CRUD operations such as adding, updating, viewing, and deleting employee details. The application is built with a modern tech stack, ensuring responsiveness and scalability.

---

### Features
- Add new employees to the system.
- Update existing employee information.
- View detailed information about employees.
- Delete employees from the system.
- Responsive design for optimal user experience across devices.

---

## Tech Stack

### Backend
- **Java 17**
- **Spring Boot**
- **PostgreSQL** for database management.
- Maven for dependency management.

### Frontend
- **ReactJS** (using Vite for build setup).
- **Redux** for state management.
- **Bootstrap** and **Material UI** for styling and responsive design.

---

## API Endpoints

### Base URL: `http://localhost:8080/api/employees`

| Method | Endpoint      | Description                            |
|--------|---------------|----------------------------------------|
| GET    | `/`           | Fetch all employees                   |
| POST   | `/`           | Add a new employee                    |
| PUT    | `/{id}`       | Update an employee                    |
| GET    | `/{id}`       | Fetch details of a specific employee  |
| DELETE | `/{id}`       | Delete a specific employee            |

---

## Folder Structure
   ```bash
   EMS/
   ├── ems-backend/ # Backend folder
   │ ├── src/
   │ │ ├── main/
   │ │ │ ├── java/net/div/ems/
   │ │ │ │ ├── controller/ # REST API controllers
   │ │ │ │ ├── dto/ # Data Transfer Objects
   │ │ │ │ ├── entity/ # Database entities
   │ │ │ │ ├── exception/ # Custom exceptions
   │ │ │ │ ├── mapper/ # Entity-DTO mappers
   │ │ │ │ ├── repository/ # Repository interfaces for database access
   │ │ │ │ ├── service/ # Business logic services
   │ │ │ │ └── EmsBackendApplication.java # Main application file
   │ │ ├── resources/
   │ │ │ ├── application.properties # Backend configuration
   │ │ │ └── static/ # For Static files
   │ └── pom.xml # Maven configuration file
   ├── ems-frontend/ # Frontend folder
   | ├── src/
   | │ ├── components/ # React components
   | │ │ ├── helperComponents/ # Reusable helper components
   | │ │ └── mainComponents/ # Main feature components
   | │ ├── services/ # API service calls
   | │ ├── utils/ # Utility functions
   | │ ├── App.jsx # Root component
   | │ ├── App.css # Global styles
   | │ └── main.jsx # Main entry point
   | ├── public/ # Static files for frontend
   | ├── vite.config.js # Vite configuration file
   | ├── package.json # npm configuration
   | ├── package-lock.json # Lock file for npm dependencies
   | └── .gitignore # Git ignore file
   └── README.md # Root documentation
   ```


---

## Setup Instructions

### Backend
1. Install **Java 17** and **Maven**.
2. Clone the repository:
   ```bash
   git clone https://github.com/divyanshu9p9/EMS.git
3. Navigate to the backend directory:
   ```bash
   cd ems-backend
4. Update application.properties with your PostgreSQL credentials:
   ```bash
   spring.datasource.url=jdbc:postgresql://localhost:5432/ems_db
   spring.datasource.username=your_username
   spring.datasource.password=your_password
5. Run the application:
   ```bash
   mvn spring-boot:run

## Frontend
1. Install Node.js and npm.
2. Navigate to the frontend directory:
   ```bash
   cd ems-frontend
3. Install the required dependencies:
   ```bash
   npm install
4. Run the development server:
   ```bash
   npm run dev

![image](https://github.com/user-attachments/assets/cf8f64bf-b200-49d6-8b0c-39cf40924f89)
![image](https://github.com/user-attachments/assets/4aee63f6-b470-4388-95f4-cb9eca900121)
![image](https://github.com/user-attachments/assets/f2e4fa5f-af27-4668-8165-65490620402a)
![image](https://github.com/user-attachments/assets/a70e4671-fc5c-4ea3-8a5a-cf3153bccaf6)
![image](https://github.com/user-attachments/assets/a345d3d2-132b-42e1-8008-9866e32dcddc)
![image](https://github.com/user-attachments/assets/c81c64d1-a99a-4237-9423-8559062dbd9a)
![image](https://github.com/user-attachments/assets/fbff4bc5-e00e-4619-914b-644367d719f5)
![image](https://github.com/user-attachments/assets/7e4b96ce-0ea6-414e-81d9-24b3ca71777c)
![image](https://github.com/user-attachments/assets/ac8b16d4-ad07-46e5-b546-3db5dd16a228)
![image](https://github.com/user-attachments/assets/5e1c096b-e56f-450f-8dc8-cab0f5fbc898)
![image](https://github.com/user-attachments/assets/b01483a2-5695-4ed4-aad4-4b59b06e8a21)
