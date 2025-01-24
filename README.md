# GoSwift Rides

GoSwift Rides is a ride-hailing platform built using the MERN stack, designed to provide a seamless and intuitive experience for both riders and drivers. With real-time tracking, secure user sessions, and efficient communication, GoSwift Rides ensures reliability and convenience at every step of the journey.

## Features
- **User and Captain Registration**: Secure and streamlined sign-up process for riders and drivers.
- **Real-time Tracking**: Leverages Google Maps API for geolocation and route optimization.
- **Efficient Communication**: Integrated Socket.IO for real-time updates and communication between users and captains.
- **Secure Sessions**: Implemented JWT authentication with role-based access control for data privacy.
- **Ride Booking**: Seamless ride booking and vehicle selection.
- **Scalability**: Designed to handle peak usage and edge cases effectively.

## Workflow

### 1. User Registration
#### Users can sign up with their details, ensuring a secure and personalized experience.
![User Registration](https://github.com/user-attachments/assets/3e961c4f-7078-4168-a55a-417f6b7ac069)

### 2. User Login Page
 #### A secure login page for users to access their accounts.
![User Login Page](https://github.com/user-attachments/assets/e5a58721-2cd9-4c8e-9d09-98d0d24b615d)

### 3. User Home Page
#### The dashboard provides an intuitive interface for users to explore and book rides.
![User Home Page](https://github.com/user-attachments/assets/790ca450-8779-46b4-a913-c62b952f3d60)


### 4. Captain Registration Page
#### Captains can register to offer their services on the platform.
![Captain Registration Page](https://github.com/user-attachments/assets/05bd25b9-ee84-4938-9c9a-8a71b8302187)

### 5. Captain Login Page
#### A secure login interface for captains to access their dashboard.
![Captain Login Page](https://github.com/user-attachments/assets/60ff02d9-7339-4dc6-889c-1c9022db346b)

### 6. Captain Homepage
#### Captains can manage ride requests and navigate efficiently using their dashboard.
![Captain Homepage](https://github.com/user-attachments/assets/5101dc09-250b-4bf6-ae01-64ea7d764c09)

### 7. Ride Creation by User
#### Users can initiate a ride request by specifying their pickup and drop-off locations.
![Ride Creation](https://github.com/user-attachments/assets/2eb096ac-53f8-43bb-814c-0c1c5451abf0)

### 8. Vehicle Selection by User
#### Users can select the type of vehicle they prefer for their ride.
![Vehicle Selection](https://github.com/user-attachments/assets/22132648-7ca7-40ec-b3b9-8f9fa15af39b)

### 9. Communication Between User and Captains
#### Real-time communication enables users to connect with captains within a specified range.
- **Left Side**: User display
- **Right Side**: Captain display
![Communication](https://github.com/user-attachments/assets/ab125f2e-463b-43e4-b4ce-61d92160c623)

### 10. OTP Sharing
#### An OTP is shared securely to authenticate the ride.
![OTP Sharing](https://github.com/user-attachments/assets/a5b768de-7ead-4164-86cc-7694475a4663)

### 11. Ride Started
#### Once the OTP is verified, the ride begins with real-time updates.
![Ride Started](https://github.com/user-attachments/assets/ff38251d-a988-432f-a975-e568aaec2a11)

### 12. Ride Completed
#### At the end of the ride, both the user and captain are redirected back to their respective homepages.
![Ride Completed](https://github.com/user-attachments/assets/9894fff0-57bf-4193-a421-5459e2125b9d)

## Technologies Used
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Real-Time Communication**: Socket.IO
- **Maps and Geolocation**: Google Maps API

## Key Highlights
- **Role-Based Access**: Separate modules for users (riders) and captains (drivers) ensure streamlined functionality.
- **Scalability**: Robust system design to handle high traffic and maintain consistent performance.
- **Enhanced User Experience**: Intuitive interfaces and efficient workflows for seamless ride booking.
- **Security**: Strong authentication mechanisms to protect user data and sessions.

## How to Run
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/GoSwift-Rides.git
   ```
2. Install dependencies:
   ```bash
   cd GoSwift-Rides
   npm install
   ```
3. Set up environment variables for backend services (e.g., MongoDB URI, JWT Secret, API keys).
4. Start the development servers:

   4.1 Frontend
   ```bash
   npm run dev
   ```

   4.2 Backend
   ```bash
   npx nodemon
   ```
6. Open the application in your browser:
   ```
   http://localhost:5173
   ```

## Future Enhancements
- **Ride History**: Add a feature to view past rides.
- **Payment Integration**: Enable secure payment options within the app.
- **Rating System**: Allow users to rate their ride experience.
- **Push Notifications**: Real-time notifications for ride updates.

---

### Made with ❤️ by Akshay Singh
