import { Rating } from "@mui/material";
import { Link } from "react-router-dom";




const PhoneDataCard = ({phones}) => {
    const {_id, name,rating,image,price,brand_name} =phones;

  
   
    return (
        <div>
            <div className="relative flex flex-col text-gray-700 p-5 md:p-10 bg-white shadow-md  rounded-xl bg-clip-border">
  <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white  rounded-xl bg-clip-border">
    <img
      src={image}
      className=""
    />
  </div>
  <div className="p-6">
    <div className="flex items-center justify-between mb-2">
      <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
       {name}
      </p>
      <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
        {price}<span className='text-2xl font-bold ml-2'>৳</span>
      </p>
    </div>
    <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
    <Rating name="size-large" style={{color:'tomato'}} defaultValue={rating} precision={0.5} size="large" />
    </p>
  </div>
  <div className="p-6 pt-0">

   
  <Link to={`/phonedetails/${_id}`}>
   
  <button 
      className="block w-full select-none rounded-lg btn bg-black hover:bg-[#3839AF] text-white  py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
    >
      See Details
    </button>
   
  </Link>

  </div>
</div>
        </div>
    );
};

export default PhoneDataCard;