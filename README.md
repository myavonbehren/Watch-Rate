# Watch&Rate
A social TV show review platform built with React, TypeScript, and ASP.NET Core that allows users to create accounts, write detailed reviews, and manage personal watchlists.

## Demo
[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/PK2TY4qF_6Q/0.jpg)](https://www.youtube.com/watch?v=PK2TY4qF_6Q)

## Features
### User Authentication & Security
* JWT token authentication with refresh token support
* Basic OAuth integration for secure access
* User-specific content management with ownership validation

### Review System
* Full CRUD operations for TV show reviews
* Five-star rating system with reusable StarRating component
* Like button functionality for favorite shows
* Public review feed accessible to all users

### Personal Watchlist
* Add shows to personal tracking list
* Toggle watched/unwatched status
* Remove items from watchlist
* Protected user-only access

### Responsive Design
* Bootstrap-based UI components
* Modular component architecture
* Client-side routing with React Router

## Technical Stack
* Frontend: React, TypeScript, Bootstrap, React Router
* Backend: ASP.NET Core Minimal API, Entity Framework Core
* Authentication: JWT tokens, OAuth
* Database: Entity Framework Core with comprehensive CRUD operations

## Architecture
The application follows a clean separation between frontend and backend, with JWT authentication securing API endpoints while allowing public read access to reviews. The backend implements RESTful API design with dedicated endpoints for reviews and watchlist management, ensuring users can only modify their own content.
