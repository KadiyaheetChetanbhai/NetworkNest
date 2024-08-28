﻿GitHub README
Network Nest
Network Nest is a dynamic platform designed to bridge the gap between startups and investors. It also serves as a job portal where individuals can explore and apply for opportunities within startups. The platform is built with modern web technologies, offering a seamless user experience.

Features
Investor-Startup Connection: Facilitates meaningful connections between startups seeking investment and potential investors.
Job Application Portal: Allows users to apply for job openings within startups.
Short Video Platform: Features a reels-like section for short videos, enhancing engagement.
Startup Analytics: Investors can access detailed analytics on startup performance, including profitability and financial ratios.
Legal Case Upload: Startups can upload information regarding their legal cases for transparency.
Content Sharing: Both startups and investors can share posts and videos to engage with the community.
Tech Stack
Frontend: React
Backend: Django
Authentication: Knox (Django Rest Framework)
Video & Image Storage: Cloudinary
Database: SQLite (or any preferred SQL database)
API: Django Rest Framework
Getting Started
Prerequisites
Python 3.x
Node.js
npm or yarn
Cloudinary account for media storage
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/network-nest.git
cd network-nest
Backend Setup:

Create a virtual environment and activate it:
bash
Copy code
python -m venv env
source env/bin/activate  # On Windows use `env\Scripts\activate`
Install dependencies:
bash
Copy code
pip install -r requirements.txt
Set up your environment variables (e.g., Cloudinary credentials, database settings).
Apply migrations:
bash
Copy code
python manage.py migrate
Run the development server:
bash
Copy code
python manage.py runserver
Frontend Setup:

Navigate to the frontend directory:
bash
Copy code
cd frontend
Install dependencies:
bash
Copy code
npm install
Start the React development server:
bash
Copy code
npm start
Access the application:

Open your browser and go to http://localhost:8000 for the Django backend.
Access http://localhost:3000 for the React frontend.
Contributing
We welcome contributions! Please fork the repository and create a pull request.

License
This project is licensed under the MIT License - see the LICENSE file for details.
