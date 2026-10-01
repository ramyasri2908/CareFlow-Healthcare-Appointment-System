# CareFlow — Healthcare Appointment System

A responsive frontend academic project built using only **HTML5, CSS3 and vanilla JavaScript**. Layouts use CSS Grid and Flexbox. No framework, backend, database server, or external package is required.

## Required modules
### User / Patient Module
- Signup and login using browser Local Storage
- Patient dashboard and appointment summary
- Search and filter doctors by name, specialization or language
- View doctor availability, consultation mode, languages and estimated fee
- Book, view, reschedule and cancel appointments
- Prevent double-booking the same doctor, date and time slot
- Illustrative wait-time estimate based on earlier scheduled slots
- Appointment reminder panel on the dashboard
- Patient Records: create, edit and delete personal visit notes, medication-list notes, allergy notes and report notes
- Virtual Visits: video appointment list and interactive demo consultation room with simulated camera/microphone controls
- Care Passport preparation checklist

### Admin Module
- Demo admin login and dashboard statistics
- Add, edit and delete doctors; select a listed specialty or type a custom specialty
- Manage doctor languages, consultation mode, estimated fee and available days
- View registered patients and appointments; update appointment status
- Schedule insights: appointment load by doctor/date and illustrative wait-time estimate
- Patient-record overview for the academic demo

## Run in VS Code
1. Extract the ZIP.
2. Open the `CareFlow_SDC_Project` folder in VS Code.
3. Open `index.html`.
4. Right-click and choose **Open with Live Server** (recommended).

## Demo admin login
- Email: `admin@careflow.com`
- Password: `admin123`

For patient testing, use Sign Up and then log in with the same email and password.

## Important scope note
This is a frontend-only academic demonstration. Local Storage data is specific to the browser/origin and is not shared across devices. The virtual consultation room is a UI simulation and does not transmit real video/audio. Reminders are displayed in-app, not sent as SMS/email/push notifications. Wait times are illustrative estimates, not live hospital queue data. Do not enter real or sensitive patient information. Production deployment would require secure server-side authentication, a protected database, real telehealth infrastructure, and appropriate privacy/security review.
