import React, { useState, useContext } from "react";
import { TodoContext } from "./TodoContext"; // Import context to access addTask

// Component for adding a new task
const TodoListHeader = () => {
  const [todoTitle, setTodoTitle] = useState(""); // Store new task title
  const [todoTime, setTodoTime] = useState(""); // Store new task time

  const { addTask } = useContext(TodoContext); // Access addTask from context

  // Function to handle form submission
  const handleSubmit = () => {
    if (!todoTitle || !todoTime) {
      alert("Please fill in both fields."); // Validate input
      return;
    }

    const newTask = {
      title: todoTitle,
      time: todoTime,
      status: "Created", // Default status
      created_at: new Date(), // Set created time
    };

    addTask(newTask); // Add new task to context
    setTodoTitle(""); // Reset input
    setTodoTime("");
  };

  return (
    <div className="todoListHeader">
      <input
        type="text"
        placeholder="Type your todo list here"
        value={todoTitle} // Controlled input for title
        onChange={(e) => setTodoTitle(e.target.value)} // Update title
      />
      <input
        type="time"
        value={todoTime} // Controlled input for time
        onChange={(e) => setTodoTime(e.target.value)} // Update time
      />
      <button className="Button" onClick={handleSubmit}>Submit</button> {/* Submit button */}
    </div>
  );
};

export default TodoListHeader;
