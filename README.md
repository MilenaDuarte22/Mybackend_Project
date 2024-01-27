# Contacts API
A simple Node.js, Express, and MongoDB API for managing contacts, providing user registration, login, and secure access to contact lists using JSON Web Tokens (JWT).

## Overview
This API allows users to register, log in, and manage their contact lists securely. Each user has a unique set of contacts accessible only after successful login, ensuring data privacy. JWT authentication is implemented for secure access to protected routes.
Users cannot access the contacts made for other users.

## Features
* User Registration: Create a new user account with a unique username, email, and password.
* User Login: Authenticate users with their email and password, providing a JWT for secure access.
* Contact Management: Add, retrieve, update, and delete contacts associated with the logged-in user.
* Token Validation: Protect routes with middleware to validate JWT, ensuring secure access.

#  API Endpoints
## User Routes
* POST /api/users/register: Register a new user.
* POST /api/users/login: Log in and receive a JWT for authentication.
* GET /api/users/current: Retrieve current user information (protected route).

## Contact Routes
* GET /api/contacts: Retrieve all contacts for the logged-in user (protected route).
* POST /api/contacts: Create a new contact for the logged-in user (protected route).
* GET /api/contacts/:id: Retrieve a specific contact for the logged-in user (protected route).
* PUT /api/contacts/:id: Update a specific contact for the logged-in user (protected route).
* DELETE /api/contacts/:id: Delete a specific contact for the logged-in user (protected route).

## Technologies Used
* Node.js
* Express
* MongoDB
* JSON Web Tokens (JWT)
* Bcrypt (for password hashing)
