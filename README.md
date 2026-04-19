# Random Joke Generator

This project is included in my API capstone practice. This project's objective is to build a web app that fetches and displays random jokes from a public API while applying server-side rendering and basic UI styling.

## Project Overview

The application requests data from JokeAPI and renders the result using EJS templates. It highlights backend integration using Express and Axios, along with simple frontend structure and styling.

This project strengthened my comprehension of:

- Building server-rendered web pages with Express and EJS
- Fetching external API data using Axios
- Handling API errors gracefully
- Organizing project files for Node.js applications
- Connecting frontend views with backend routes

## Features

- Displays random jokes from JokeAPI
- Supports both single-line and two-part joke responses
- Friendly error message when API requests fail
- Styled interface using a separate CSS file

## Built With

- Node.js
- Express.js
- EJS
- Axios
- CSS3

## Project Structure

```text
joke-generator/
│
├── index.js
├── package.json
├── README.md
├── public/
│   └── style.css
└── views/
	└── index.ejs
```

## What I Learned

While working on this project, I gained experience in:

- Creating route handlers with asynchronous API calls
- Rendering dynamic data in EJS templates
- Separating static assets and view templates in Express
- Improving user experience with basic error handling
- Structuring small full-stack JavaScript projects cleanly

## Future Improvements

Possible improvements for this project include:

- Adding joke categories and filters
- Adding a button for fetching new jokes without full page reload
- Writing tests for routes and API integration
