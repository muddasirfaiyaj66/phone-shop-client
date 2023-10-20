import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import AddPhones from "../Pages/AddPhones/AddPhones";
import PrivateRoute from "./PrivateRoute/PrivateRoute";


const Route = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path:'/',
                element:<Home></Home>,
                loader:() => fetch('/brand.json')
            }, 
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/login',
                element: <Login></Login>
            }, 
            {
                path:'/addphones',
                element: <PrivateRoute><AddPhones></AddPhones></PrivateRoute>
            }
        ]
    }
])
export default Route;