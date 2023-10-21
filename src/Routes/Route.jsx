import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import AddPhones from "../Pages/AddPhones/AddPhones";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import PhoneData from "../Components/PhoneData/PhoneData";
import PhoneDetails from "../Components/Details/PhoneDetails";
import EditData from "../Components/EditData/EditData";




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
            },

            {
                path:'/phones/:brand_name',
                element:<PhoneData></PhoneData>,
               loader:()=> fetch('http://localhost:5000/phones')
                
                
            },
           
           
            {
                path:'/phonedetails/:id',
                element: <PrivateRoute>
                    <PhoneDetails></PhoneDetails>
                </PrivateRoute>,
                
            },
         
            {
                path:'/editdata/:id',
                element: <PrivateRoute>
                    <EditData></EditData>
                </PrivateRoute>,
              
               
            },
           
           
        ]       
    }
])
export default Route;