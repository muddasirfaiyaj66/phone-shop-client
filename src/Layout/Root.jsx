import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Navbar/Footer/Footer";


const Root = () => {
    return (
        <div>
        <div className="max-w-screen-xl mx-auto ">
        <Navbar ></Navbar>
        </div>
      
           <Outlet></Outlet> 
           <Footer></Footer>
        </div>
    );
};

export default Root;