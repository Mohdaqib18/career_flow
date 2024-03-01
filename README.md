# Kanban Board App
This is a Kanban board application built with React, Ant Design components, Zustand for state management, React Beautiful DND for drag and drop functionality, and TypeScript for static type checking.

# Installation
To run the application locally, follow these steps:
 - Clone this repository to your local machine.
-Navigate to the project directory.
-Install dependencies using npm install or yarn install.
-Start the development server using npm run dev or yarn start.

# Features

 # JobAddForm
 -Allows users to add a new job to the Kanban board.
-Provides input fields for job title, company, location, description, etc.

# JobEditForm
 -Allows users to edit the details of a job.
 -Similar input fields as JobAddForm but pre-filled with existing job details.
 
# JobDetailsForm
 Displays detailed information about a specific job.
 Allows users to edit or delete the job.
 Provides buttons for updating or deleting the job.

# JobDashboard
 Displays the Kanban board with different columns representing job categories (e.g., Applied, Interviewing, Saved, Offer & Reject).
 Each column contains JobCard components representing individual job postings.

# JobCard
 Represents an individual job posting within the Kanban board.
 Displays basic information about the job such as title and company.
 Supports drag and drop functionality for moving cards between different columns.
 
# SideDrawer
A side drawer component for additional actions or navigation.

# Navbar
Navigation bar component for easy access to different parts of the application.


# State Management using Zustand
The store folder contains the Zustand store for managing application state. Zustand is used for its simplicity and performance benefits.

store.tsx: Defines the Zustand store for managing job-related state.
State includes an array of jobs, current job details, etc.
Provides actions for adding, editing, deleting jobs, and updating job details.

# Usage
Start by adding jobs using the JobAddForm.
View the Kanban board on the JobDashboard component.
Drag and drop JobCards between different columns to change the job category.
Click on a JobCard to view more details using JobDetailsForm.
Edit or delete job details as needed.
