import { useContext, useState } from "react";
import { Link, } from "react-router-dom";

import { BiShowAlt,BiHide } from "react-icons/bi";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProviders";

const Register = () => {
  
  
  const [showPassword, setShowPassword]=useState(false);
    const {createUser} = useContext(AuthContext)
    const handleRegister = (event) => {
      event.preventDefault();
      const form = new FormData(event.currentTarget);
      const email = form.get("email");
      const password = form.get("password");
      const accepted = event.target.terms.checked;
     
      
      
      if(password.length < 6){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: "Password should be at least 6 character or longer",
        
        })
         
          return;
      }
      else if(!/[A-Z]/.test(password)){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text:"Your password should have at lest one uppercase characters. ",
        
        })
          
          return;
      }
      else if(!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)){
        Swal.fire({
          icon: 'error',
          title: 'OOps...',
          text:'Include at least one special character, such as "@" or "#"',
        
        })
        
        return;
      }
      else if(!accepted){
        Swal.fire({
          icon: 'error',
          title: 'Oops..',
          text:"Please Accept Our Terms and Conditions!!",
        
        })
          
          return;
      }
  
      //create user 
      createUser(email,password)
      .then(result => {
        console.log(result);
     
     
        
        Swal.fire({
          icon: 'success',
          title: 'Congrats!!!',
          text:"User Created Successfully",
        
        })

        
      })
      .catch(error => {
        
        
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text:`${error?.message}`,
        
        })
       
      })

     
    };
    return (
      <div data-aos="zoom-out-down">
        
  
        <div className="justify-center lg:w-1/2 md:w-3/4 my-10 mx-auto bg-[#FFFFFF] shadow-xl p-5">
          <div className=" ">
            <h2 className="text-2xl text-center font-bold mb-10">
              {" "}
              Register your account
            </h2>
            <p className="border-b-2  mx-10"></p>
          </div>
          <form onSubmit={handleRegister} className="card-body  ">
           
            
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative ">
              <label className="label">
                <span className="label-text font-bold">Password</span>
              </label>
              <input
               type={showPassword ? "text" : "password" }
                name="password"
                placeholder="password"
                className="input input-bordered  "
                required
                
              />
              <span className=" flex mt-12 mr-2 right-0 justify-end  text-2xl absolute  " onClick={() =>setShowPassword(!showPassword)}>{ showPassword ? <BiHide></BiHide> : <BiShowAlt></BiShowAlt>}</span>

            </div>
            <div className="flex gap-2 text-sm mt-5 text-[#706F6F]">
             
              <p>
              <input className="mb-4" type="checkbox" name="terms" id="terms" />
    <label htmlFor="terms" className="ml-3">Accept our <a className="border-b " href="www.google.com">Terms and Conditions</a></label>
              </p>
            </div>
            <div className="form-control mt-6">
              <button className="btn font-bold  bg-[#403F3F] text-white hover:bg-[#AE69DD]">
                Register
              </button>
            </div>
          </form>
          <p className="text-center font-medium pb-8">
            Already Have An Account ?
            <span className="text-[#3839AF] font-bold">
              
              <Link to="/login">Login</Link>
            </span>
          </p>
        </div>
        
      </div>
    );
  };
  
  export default Register;
  