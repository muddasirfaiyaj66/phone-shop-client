import { Link, useParams } from "react-router-dom";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import {  useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Rating } from "@mui/material";


const PhoneDetails = () => {
 
 
  const { id } = useParams();
  const [phone, setPhone] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/phones/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPhone(data);
       
      });
  }, [id]);

  const {
    _id,
    name,
    brand_name,
    ram,
    storage,
    rating,
    details,
    image,
    price,
    camera,
    operating_system,
  } = phone;
  const handleAddToCart = () => {
   
        
        fetch('http://localhost:5000/cart',{
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body: JSON.stringify(phone)
        } )
            .then(res=> res.json())
            .then(data => {
              if(data.insertedId){
                Swal.fire({
                  icon: 'success',
                  title: 'Success',
                  text: 'Successfully added to cart',
                 
                })
              }
            })
    
           
        
 
  };

  return (
    <>
      <section className="overflow-hidden p-5 md:P-10 bg-white py-11 font-poppins ">
        <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 md:w-1/2 ">
              <div className="sticky top-0 z-50 overflow-hidden ">
                <div className="relative mb-6 lg:mb-10 lg:h-2/4 ">
                  <img
                    src={image}
                    alt=""
                    className="object-cover w-full lg:h-full "
                  />
                </div>
                <div className="flex-wrap hidden md:flex "></div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 ">
              <div className="lg:pl-20">
                <div className="mb-8 ">
                  <h2 className="max-w-xl mt-2 mb-6 text-2xl font-bold  md:text-4xl">
                    {name}
                  </h2>

                  <p>
                    by{" "}
                    <span className="ml-2 font-bold text-xl">{brand_name}</span>
                  </p>
                  <p className="block font-sans my-3 text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                    <Rating
                      name="size-large"
                      style={{ color: "tomato" }}
                      defaultValue={rating}
                      precision={0.5}
                      size="large"
                    />
                  </p>

                  <div className="flex ml-2 text-xl items-center mt-5 font-bold mb-6">
                    <ul className="list-disc">
                      <li>Ram : {ram}</li>
                      <li>Storage: {storage}</li>
                      <li>Camera: {camera}</li>
                      <li>Operating System: {operating_system}</li>
                    </ul>
                  </div>

                  <p className="inline-block mb-8 text-4xl font-bold text-gray-700 dark:text-gray-400 ">
                    <span className="flex text-gray-600">
                      <FaBangladeshiTakaSign></FaBangladeshiTakaSign>
                      {price}
                    </span>
                  </p>
                  <p className="max-w-md mb-8 text-gray-700 dark:text-gray-700">
                    {details}
                  </p>
                </div>

                <div className="flex flex-wrap items-center -mx-4 ">
                  <div className="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
                    <button
                      onClick={handleAddToCart}
                      className="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300"
                    >
                      Add to Cart
                    </button>
                  </div>
                  <div className="w-full px-4 mb-4 lg:mb-0 lg:w-1/2">
                    <Link to={`/editdata/${_id}`}>
                      <button className="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300">
                        Edit
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PhoneDetails;
