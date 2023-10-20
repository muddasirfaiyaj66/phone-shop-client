import { useContext } from "react";
import {  Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";


const Navbar = () => {
  const {user, logOut}= useContext(AuthContext);


    const navLinks = <>

    
               <li> <NavLink to='/' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-[#3839AF]  text-white " : ""
  }>Home</NavLink></li>
               <li> <NavLink to='/about' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-[#3839AF]  text-white " : ""
  }>About</NavLink></li>
               <li> <NavLink to='/addphones' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-[#3839AF]  text-white " : ""
  }>Add Phones</NavLink></li>
        {
          user? "" : <li> <NavLink to='/register' className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "bg-[#3839AF]  text-white " : ""
        }>Register</NavLink></li>
                    
        }     
                
    </>
    return (
        <div  data-aos="fade-up"
        data-aos-duration="1500" className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-bold">
              {navLinks}
            </ul>
          </div>
        <div className="hidden md:flex  ">
          <img className=" w-[250px]  flex items-center justify-center" src="/verticleLogo.png" alt="" />
        </div>
        </div>
        <div className="navbar-center hidden  md:flex">
          <ul className="menu menu-horizontal px-1 font-bold gap-5 text-lg">
            {navLinks}
          </ul>
        </div>
       {/* avatar part  */}
       <div className="navbar-end">
                    {
                        user?.email ? <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL? user.photoURL : 'nouser.png'} alt={user.displayName} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <button className="btn btn-sm  btn-ghost">{user.displayName}</button>

                                </li>
                                <li>
                                    <button className="btn btn-sm  btn-ghost bg-red-500 text-white font-bold"
                                        onClick={logOut}
                                    >Logout</button>

                                </li>
                            </ul>
                        </div>
                            :
                            <Link to='/login'>
                                <button className="btn btn-md  btn-ghost hover:bg-[#3839AF] px-8 bg-black text-white font-bold">Login</button>
                            </Link>
                    }
                </div>
      </div>
    );
};

export default Navbar;