import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from './App.jsx'
import Employee from './pages/Employee.jsx'
import Report from './pages/Report.jsx'
import EmplpoyeeDetails from './pages/EmployeeDetails.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },

  {
    path: "/employee",
    element: <Employee />
  }, 

  {
    path: "/employee/:id",
    element: <EmplpoyeeDetails />
  },

  {
    path: "/report",
    element: <Report />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
