import { useLoaderData } from "react-router-dom";
import CartData from "./CartData/CartData";
import { useState } from "react";


const Cart = () => {
	const cartAllData = useLoaderData()
	const [cartItems, setCartItems] =useState(cartAllData)
	console.log(cartAllData);

    return (
        <div>
            <div className="flex flex-col  p-6 space-y-5 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
	<h2 className="text-2xl text-center font-bold my-8">Your cart</h2>
	<ul className="flex flex-col divide-y divide-gray-700">
		<li className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:justify-between">
			{
				cartItems?.map(cartItem=> <CartData  key={cartItem._id} cartItems={cartItems} setCartItems={setCartItems} cartItem={cartItem}></CartData> )
			}
		</li>
		
	</ul>
	
</div>
        </div>
    );
};

export default Cart;