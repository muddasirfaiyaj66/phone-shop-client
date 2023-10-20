import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";


const PrivateRoute = ({children}) => {
    const {user, loading} =useContext(AuthContext);
    const location =useLocation();

    if(loading){
        return <div className="flex text-center justify-center items-center "><span className="loading bg-[#90EE90]  loading-spinner loading-lg"></span></div>
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;