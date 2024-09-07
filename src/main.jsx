import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TodoContextProvider from './pages/todoList/TodoContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoContextProvider>   
       <App />
       </TodoContextProvider>
  </React.StrictMode>,
)

