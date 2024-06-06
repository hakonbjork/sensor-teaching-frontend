# Sensor Teaching - Frontend

This app provides a real-time dashboard for teachers to obtain a better overview of students in a class. The system works by continuously measuring physiological data from smart wristbands and web cameras and displaying relevant information visually on the dashboard. This is the frontend part of the application and contains a dashboard created in React using Typescript. To use the full application, the backend needs to run as well. This system is currently configured to use Firebase Realtime Database. Other databases can be used, but this requires modifications of the code to ensure compatibility with the chosen database technology.

The Frontend and Backend work independently, meaning that they can both run separately without the other part. This is because data from the backend(s) are sent to the database, and the frontend fetches data from the database. If only backend(s) are running, data will be gathered to the database, but not shown in the dashboard. If only the frontend is running, old or no data will be shown on the dashboard. It should still run the frontend for debugging or testing purposes.

## Getting started

### Required software

- React.js
- Typescript

### Usage

1.  Clone the repository to your local machine: `git clone https://github.com/hakonbjork/sensor-teaching-frontend.git`
2.  Navigate to the project folder
3.  Create an env file containing your database configuration details, outlined in `src/util/firebase.ts`
4.  Run `npm i` to install the required npm packages
5.  Run the project: `npm run dev`

## Authors

Further questions about the system can be directed to the authors of the project via mail:

- cecilikn@stud.ntnu.no
- haakofb@stud.ntnu.no
