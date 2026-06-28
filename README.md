# Movie List App

A React application for browsing, adding, and deleting movies, built as part of the React List Rendering project. Demonstrates component-based structure, dynamic list rendering, and state management using React hooks.

## Features

-  Displays a list of movies using separate `MovieList` and `MovieItem` components
-  Add new movies dynamically via a form
-  Delete movies from the list
-  Styled with Tailwind CSS
-  Built with React + Vite for fast development


## Project Structure
src/

├── App.jsx # Holds state, renders the form and MovieList
├── MovieList.jsx  # Maps over the movie array, renders MovieItem for each
├── MovieItem.jsx   # Displays a single movie and its delete button
└── index.css  # Tailwind import

## Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/tuhamaina-blip/movie-list-app.git
cd movie-list-app
npm install
```

Run the development server:

```bash
npm run dev
```

Then open the local URL shown in your terminal.

## How It Works

- Movies are stored in an array of objects in `App.jsx` using `useState`.
- `MovieList` receives the array as a prop and uses `.map()` to render a `MovieItem` for each movie.
- Adding a movie updates state with the new array (`[...movies, newMovie]`); deleting filters it out (`movies.filter(...)`).
- Each `MovieItem` gets a unique `key` prop, as required when rendering lists in React.


