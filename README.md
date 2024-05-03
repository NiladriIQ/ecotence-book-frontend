# Ecotence Book Frontend
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This is a simple React.js frontend project for managing a collection of books. It interacts with the backend API developed in Task 1 to perform CRUD operations on books.

# Project Details
The frontend allows users to view a list of books, add a new book, update an existing book, and delete a book. It provides a user-friendly interface for interacting with the book data stored on the server.

# Installation Steps
1.Clone the Repository:
git clone [<repository-url>](https://github.com/NiladriIQ/ecotence-book-frontend/tree/main)
cd ecotence-book-frontend

# Install Dependencies:
npm install

## Available Scripts
In the project directory, you can run:

# Start the Development Server:
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

# Usage
View Books: Navigate to the books page to view a list of all books.
Add Book: Click on the "Add Book" button to add a new book to the collection.
Update Book: Click on the "Edit" button next to a book to update its details.
Delete Book: Click on the "Delete" button next to a book to remove it from the collection.

# Design Decisions
React.js: The frontend is built using React.js, a popular JavaScript library for building user interfaces. React provides a component-based architecture, making it easy to manage and reuse UI elements.
Axios: Axios is used as the HTTP client for making requests to the backend API. It provides a simple and intuitive API for performing asynchronous operations.
Component Structure: The frontend is organized into components to modularize the code and improve maintainability. Each component is responsible for a specific part of the UI, such as displaying a list of books or managing book details.

# Dependencies
react: JavaScript library for building user interfaces.
axios: Promise-based HTTP client for the browser and Node.js.
react-router-dom: DOM bindings for React Router, allowing navigation within the application.
react-hook-form: For building complex forms in react.
