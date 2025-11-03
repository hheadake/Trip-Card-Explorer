# Trip-Card-Explorer# 

A simple React + Vite web application that displays a collection of travel destinations using data from a local JSON file.  
Each trip card shows an image, name, rating, and short description, with a “More Info” button that opens a detailed view for that trip.

---

 How to Run the App

## Install dependencies
cd .\trip-card\
Make sure you have **Node.js (v16+)** installed, then run:
npm install

### Start the development server
npm run dev
--The app will usually run at: http://localhost:5173






Stack & Frameworks

React + Vite → for fast development and modern tooling.

Material UI (MUI) → for ready-to-use responsive UI components (ImageList, Rating, Modal, Buttons, etc.).

React Router → to handle navigation from the gallery view to individual trip details.

Local JSON data → used as a mock API for simplicity and offline development.

 Component Structure

TripCard.jsx → Main gallery that lists all trip cards.

TripDetails.jsx → Dedicated page showing full trip information.

getTripData.js → Data access layer (fetches mock JSON).

requester.js → Small fetch wrapper for local API simulation.

 UX / UI Design

Responsive ImageList layout that adapts to different screen sizes.

Each card includes:

Trip image (with fallback if image fails to load)

Name and rating (stars)

Short description

“More Info” button → navigates to detailed view.

Clean and consistent spacing using MUI’s Box + sx styling system.
