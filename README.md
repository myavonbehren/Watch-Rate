[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/qbAOVmAh)
[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-2972f46106e565e64193e422d61a12cf1da4916b45550586e14ef0a7c637dd04.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=19474506)

# Watch&Rate – Web Development Final Project
### By Mya Von Behren

### Overview
Watch%Rate is a web application that is a social TV show review platform that allows users to create accounts and share their viewing experiences. Users can write detailed reviews of TV shows they've watched, rate them on a five-star scale, and mark their favorites with a like button. The application includes full CRUD functionality where users can create, edit, and delete their own reviews while viewing public reviews from other users. Additionally, users have a personal watchlist to track shows they've seen or want to watch, with the ability to add shows, toggle their watched status, and remove items from their list. 

### Frontend
The frontend uses React and Bootstrap. The application features user authentication with JWT tokens and basic OAuth for secure access to reviews and watchlists. Components are organized modularly with reusable elements like StarRating and LikeButton, and uses React Router for client-side navigation between pages likes login, add review, and watchlist management.

### Backend and Entity Framework Core
The backend uses ASP.NET Core Minimal API with Entity Framework Core for database operation and provides comprehensive CRUD functionality for both reviews and watchlist items. Authentication is implemented using JWT tokens and basic OAuth, ensuring that users can only modify their content while allowing public read access to all reviews, regardless of whether a user is signed in or not. The API includes dedicated endpoints for reviews (GET, POST, PUT, DELETE) and watchlist management (GET, POST, PATCH for watch status, DELETE), with automatic user assignment and ownership validation.

### Login and Sign Up


### Why

### More time
