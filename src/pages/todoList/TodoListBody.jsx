import React, { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md"; // Import icons

// Component responsible for rendering each task and handling status, delete, and edit functionality
const TodoListBody = ({ todoData, handleDelete, handleStatusChange, handleEditTask }) => {
  const [isEditing, setIsEditing] = useState(null); // Manage edit mode for tasks
  const [editedTask, setEditedTask] = useState({}); // Store edited task details

  // Handle changes while editing task
  const handleEditChange = (e, field, i) => {
    setEditedTask({ ...editedTask, [field]: e.target.value });
  };

  // Save edited task
  const handleEditSubmit = (i) => {
    handleEditTask(i, editedTask);
    setIsEditing(null); // Exit edit mode
  };

  return (
    <div className="todoListBody">
      {/* Map through tasks */}
      {todoData?.map((data, i) => (
        <div
          className={`todoItem ${data.status === "Completed" ? "completed" : ""}`} // Mark completed tasks visually
          key={i}
        >
          {/* Edit mode UI */}
          {isEditing === i ? (
            <>
              <input
                type="text"
                defaultValue={data.title} // Show current task title
                onChange={(e) => handleEditChange(e, "title", i)} // Update edited title
              />
              <input
                type="time"
                defaultValue={data.time} // Show current task time
                onChange={(e) => handleEditChange(e, "time", i)} // Update edited time
              />
              {/* Save or Cancel edit */}
              <button className="save" onClick={() => handleEditSubmit(i)}>Save</button>
              <button className="cancel" onClick={() => setIsEditing(null)}>Cancel</button>
            </>
          ) : (
            <>
              {/* Regular task display */}
              <p className="title">{data?.title}</p>
              <p className="time">{data?.time}</p>
              <select
                name="status"
                className="status"
                defaultValue={data?.status} // Display current status
                onChange={(e) => handleStatusChange(e.target.value, i)} // Update status
              >
                <option value="Completed">Completed</option>
                <option value="Created">Created</option>
                <option value="Ongoing">Ongoing</option>
              </select>
              <p className="created_at">{data?.created_at.toLocaleString()}</p>
              <MdEdit className="editBtn" onClick={() => setIsEditing(i)} /> {/* Edit button */}
              <MdDelete color="red" className="deleteBtn" onClick={() => handleDelete(i)} /> {/* Delete button */}
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoListBody;
