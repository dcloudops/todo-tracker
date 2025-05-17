# React Todo App

A simple, elegant todo application built with React featuring a clean UI and core functionality.

![React Todo App Screenshot](/public/images/Screenshot%202025-05-16%20215436.png)

## Features

- ✅ Add new tasks to your todo list
- ✅ Mark tasks as completed with a simple click
- ✅ Delete tasks you no longer need
- ✅ Clean, responsive user interface
- ✅ Local state management with React Hooks

## Live Demo

[View the live demo](https://dcloudops.github.io/todo-tracker/)

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/dcloudops/todo-tracker.git
cd todo-tracker
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm start
# or
yarn start
```

4. Open your browser and visit `http://localhost:3000`

## Project Structure

```
src/
├── components/
│   ├── TodoForm.js    # Component for adding new todos
│   ├── TodoList.js    # Component for displaying the list of todos
│   └── TodoItem.js    # Component for individual todo items
├── App.js             # Main application component
├── App.css            # Styling for the application
├── index.js           # Entry point for the React application
└── ...
```

## How It Works

- **App.js**: The main component that manages state and contains the core functionality
- **TodoForm.js**: Handles user input for creating new todos
- **TodoList.js**: Renders the list of todos and passes props to individual TodoItems
- **TodoItem.js**: Displays each todo with completion toggle and delete functionality

## Learning Objectives

This project demonstrates:

1. React functional components
2. React Hooks (useState)
3. Props and component composition
4. Event handling in React
5. Conditional rendering
6. JavaScript array methods (map, filter)
7. CSS styling in React applications

## Future Enhancements

- Add local storage to persist todos between sessions
- Implement categories or tags for todos
- Add due dates and priority levels
- Create a dark mode toggle
- Add drag and drop functionality to reorder todos
- Implement user authentication and cloud storage

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Create React App for the initial project setup
- React documentation and community for guidance
- Your feedback and contributions!
