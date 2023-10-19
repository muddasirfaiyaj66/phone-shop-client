import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import routes from "./Routes/Route"
import { RouterProvider } from "react-router-dom";
import AuthProviders from './Providers/AuthProviders';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
    <RouterProvider router={routes} />
    </AuthProviders>
  </React.StrictMode>,
)



