// Utility functions for localStorage operations
export const storeToLocalStorage = (key, value) => {
    if (!value) return;
    value = JSON.stringify(value);
    localStorage.setItem(key, value);
  };
  
  export const getFromLocalStorage = (key) => {
    let value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  };
  
  export const removeFromLocalStorage = (key) => {
    localStorage.removeItem(key);
  };
  