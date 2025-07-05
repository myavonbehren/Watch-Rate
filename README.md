# Watch&Rate

### Overview
Watch&Rate is a web application that is a social TV show review platform that allows users to create accounts and share their viewing experiences. Users can write detailed reviews of TV shows they've watched, rate them on a five-star scale, and mark their favorites with a like button. The application includes full CRUD functionality where users can create, edit, and delete their own reviews while viewing public reviews from other users. Additionally, users have a personal watchlist to track shows they've seen or want to watch, with the ability to add shows, toggle their watched status, and remove items from their list. 

### Demo
[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/PK2TY4qF_6Q/0.jpg)](https://www.youtube.com/watch?v=PK2TY4qF_6Q)

### Frontend
The frontend uses React and Bootstrap. The application features user authentication with JWT tokens and basic OAuth for secure access to reviews and watchlists. Components are organized modularly with reusable elements like StarRating and LikeButton, and uses React Router for client-side navigation between pages likes login, add review, and watchlist management.

### Backend and Entity Framework Core
The backend uses ASP.NET Core Minimal API with Entity Framework Core for database operation and provides comprehensive CRUD functionality for both reviews and watchlist items. Authentication is implemented using JWT tokens and basic OAuth, ensuring that users can only modify their content while allowing public read access to all reviews, regardless of whether a user is signed in or not. The API includes dedicated endpoints for reviews (GET, POST, PUT, DELETE) and watchlist management (GET, POST, PATCH for watch status, DELETE), with automatic user assignment and ownership validation.

### Login and Sign Up
The application implements a dual authentication system where users can initially sign up and log in using basic autherntication (username/password), which then returns JWT access and refresh tokens for subsequent API requests. Once authenticated, all protected endpoints use JWT Bearer token authentication to verify user identity and ensure users can only access and modify their own content.

### Pages
The application has four main pages that provide a complete user experience for TV show reviews and watchlist management:
* Home – The main landing page displays all public reviews from users across the platform, accessible to both authenticated and guest users. Logged-in users see additional Edit and Delete buttons on their own reviews, enabling them to manage their published content directly from the main feed.
* Login/Sign Up – These pages share the same component but serve different functions based on routing, with the login page authenticating exiting users and the sign up page allowing new account creating through username, email, and password registration.
* Write A Review – A protected page exclusive to authenticated users that provides a comphrensive review creation form, allowing users to input show titles, detailed written reviews, five-star rating, and mark favorites with a like button.
* Watchlist – Another authenticated-only page that serves as a personal show tracker, enabling users to add shows to their watchlist, toggle between watched and unwatched status, and remove items as needed.

### Why
I choose this specific project because of my passion for watching TV shows (film minor) and my appreciation for platforms like Letterboxd, which provides movie tracking and review experience but does not support for television content. I wanted to create a similar platform specifically designed for TV shows, where users can maintain watchlists and share detailed reviews with a community. I enjoy building applications that solve problems I personally experince, and having a dedicated space for TV show reviews and tracking was something I would use and find valuable in my life.

### More time
If I had more time, I would update the UI with dark and light mode support to improve user experience and accessibility. I would also add filtering functionality to allow users to toggle between viewing public reviews and their own personal reviews for better content organization. Lastly, I would intergrate with The Movie Database (TMDB) API to enable users to search for shows and automatically populate review details, eliminating the need for manual data entry and ensuring consistent show information across the platform.
