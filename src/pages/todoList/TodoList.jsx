import React, { useContext } from "react";
import TodoListHeader from "./TodoListHeader"; // Header component for task input form
import TodoListBody from "./TodoListBody"; // Body component for displaying tasks
import { TodoContext } from "./TodoContext"; // Import the TodoContext

// Main TodoList component
const TodoList = () => {
  // Extract todoData, deleteTask, updateTaskStatus, and editTask from context
  const { todoData, deleteTask, updateTaskStatus, editTask } = useContext(TodoContext);

  return (
    <div className="todoList">
      {/* Display Header */}
      <TodoListHeader />
      {/* Display task list */}
      <TodoListBody
        todoData={todoData}
        handleDelete={deleteTask}
        handleStatusChange={updateTaskStatus}
        handleEditTask={editTask}
      />
    </div>
  );
};

export default TodoList;
