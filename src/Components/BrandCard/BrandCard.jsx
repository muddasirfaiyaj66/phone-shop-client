import { Link } from "react-router-dom";


const BrandCard = ({brand}) => {
    const {id,brand_logo,brand_name}=brand;
    return (
        <div>
           <div data-aos="flip-up">
            
            <div className="relative flex  flex-col rounded-xl bg-gradient-to-r from-[#ffffff] to-[#ebebeb] bg-clip-border text-gray-700 shadow-xl">
  <div className="relative mx-4 mt-4 md:h-[400px] overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
    <img
      src={brand_logo}
    />
  </div>
  <div className="p-6">
    <div className="mb-2 flex items-center justify-between">
      <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
        {brand_name}
      </p>
      
    </div>
   
    
  </div>
  <div className="p-6 pt-0">

    <Link to={`/phones/${brand_name}`}>
    <button
      className="block w-full select-none rounded-lg  py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none bg-[#90EE90] text-white"
      type="button"
    >
      
    <span>See Phones</span>
    </button>
    </Link>
  </div>
</div>
        </div> 
        </div>
    );
};

export default BrandCard;