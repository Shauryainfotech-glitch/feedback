# Ahilyanagar Police Feedback System

A comprehensive bilingual (English/Marathi) feedback collection system built for Ahilyanagar Police to gather citizen feedback efficiently using web and mobile interfaces.

![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)

## Project Overview

This system enables citizens to submit feedback to the police department through a user-friendly interface. The application is designed to be multilingual and mobile-responsive, with QR code functionality to facilitate easy access.

The system was developed by Wildrex Solutions as part of the Smart City initiative for Ahilyanagar.

## Key Features

- **Bilingual Interface**: Complete support for English and Marathi languages
- **Mobile-First Design**: Fully responsive for all device sizes
- **QR Code Access**: Easy access through QR codes for in-person feedback collection
- **Image Upload**: Support for attaching images with feedback submissions
- **Modern UI**: Clean, intuitive user interface with Bootstrap 5

## Repository Structure

This is a full-stack JavaScript application with separate client and server directories:

```
feedback/
├── client/                 # React frontend
│   ├── public/             # Static files
│   └── src/                # React source code
│       ├── components/     # React components
│       └── assets/         # Images and other assets
├── server/                 # Express backend
│   ├── controllers/        # Request handlers
│   ├── models/             # Mongoose models
│   ├── routes/             # API routes
│   └── uploads/            # Uploaded images
└── README.md               # This file
```

## Quick Start

### Prerequisites
- Node.js (v14+)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/wildrex-solutions/ahilyanagar-feedback.git
   cd ahilyanagar-feedback
   ```

2. Install and run the backend:
   ```
   cd server
   npm install
   npm start
   ```

3. Install and run the frontend:
   ```
   cd client
   npm install
   npm start
   ```

4. Access the application:
   - Web interface: http://localhost:3000
   - API: http://localhost:5000

## Technical Details

### Frontend
- React 18.2.0
- React Router 6.20.0
- Bootstrap 5.3.2
- Axios 1.6.2 for API requests
- QRCode.React 3.1.0 for QR code generation
- Multilingual support with language toggle

### Backend
- Node.js with Express 5.1.0
- MongoDB with Mongoose 8.15.2
- Multer 2.0.1 for file uploads
- CORS support for cross-origin requests
- RESTful API architecture

## Deployment

The application is designed to be easily deployable:

- Frontend can be built with `npm run build` and served as static files
- Backend can be deployed to any Node.js hosting service
- MongoDB can be hosted locally or on MongoDB Atlas

## API Documentation

### Submit Feedback
**Endpoint:** `POST /api/feedback`

**Request:**
- Content-Type: multipart/form-data
- Form fields:
  - name (string, required): Full name of the submitter
  - phone (string, required): Phone number
  - description (string, required): Feedback description
  - image (file, optional): An image file

**Response:**
- 201 Created: Feedback submitted successfully
- 500 Internal Server Error: Server error

### Get All Feedback
**Endpoint:** `GET /api/feedback`

**Response:**
- 200 OK: Returns an array of feedback items, sorted by creation date in descending order
- 500 Internal Server Error: Server error

## Available Scripts

### Client

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test
```

### Server

```bash
# Install dependencies
npm install

# Start server with nodemon (if installed)
npm run dev

# Start server
npm start
```

## Support and Maintenance

For support inquiries, bug reports, or feature requests, please contact Wildrex Solutions:

- Email: support@wildrex-solutions.com
- Phone: +91-XXXXXXXXXX
- Website: https://www.wildrex-solutions.com

## Data Privacy

This application collects personal information for the sole purpose of feedback management. All data is handled in accordance with applicable privacy laws and regulations. The information collected is:

- Name
- Phone number
- Feedback description
- Optional image uploads

## License

Copyright 2025 Wildrex Solutions

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
