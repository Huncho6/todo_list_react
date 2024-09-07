import { createContext, useState, useEffect } from "react";
import { getFromLocalStorage, storeToLocalStorage } from "../../utils"; // Utilities for managing localStorage

export const TodoContext = createContext(); // Create the TodoContext

const TodoContextProvider = ({ children }) => {
  const [todoData, setTodoData] = useState(getFromLocalStorage("todoData") || []); // Initialize state from localStorage

  // Save tasks to localStorage whenever the task list changes
  useEffect(() => {
    storeToLocalStorage("todoData", todoData); // Persist tasks in localStorage
  }, [todoData]);

  // Add a new task
  const addTask = (task) => {
    setTodoData((prev) => [...prev, task]);
  };

  // Delete a task by index
  const deleteTask = (i) => {
    const newTodo = todoData.filter((_, index) => index !== i);
    setTodoData(newTodo);
  };

  // Update task status by index
  const updateTaskStatus = (status, i) => {
    const updatedTodo = [...todoData];
    updatedTodo[i].status = status;
    setTodoData(updatedTodo);
  };

  // Edit task details by index
  const editTask = (i, updatedTask) => {
    const updatedTodo = [...todoData];
    updatedTodo[i] = { ...updatedTodo[i], ...updatedTask }; // Merge changes
    setTodoData(updatedTodo);
  };

  return (
    <TodoContext.Provider value={{ todoData, addTask, deleteTask, updateTaskStatus, editTask }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
