import { FaBangladeshiTakaSign } from "react-icons/fa6";
import Swal from "sweetalert2";

const CartData = ({ cartItem, setCartItems, cartItems }) => {
  const { _id, name, image, brand_name, price } = cartItem;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://phone-shop-server-rho.vercel.app/cart/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              // Remove item from local storage
              const cartData = JSON.parse(localStorage.getItem("cart"));
              const updatedCartData = cartData.filter((item) => item._id !== _id);
              localStorage.setItem("cart", JSON.stringify(updatedCartData));

              Swal.fire("Deleted!", "Your Phone data has been deleted.", "success");
              const remaining = cartItems.filter((car) => car._id !== _id);
              setCartItems(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="flex justify-center items-center w-full space-x-2 sm:space-x-4">
        <img
          className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
          src={image}
          alt={name}
        />
        <div className="flex flex-col justify-center w-full pb-4">
          <div className="flex justify-between w-full pb-2 space-x-2">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold sm:pr-8">{name}</h3>
              <p className="text-sm dark:text-gray-400">{brand_name}</p>
            </div>
            <div className="text-right ">
              <p className="text-lg flex justify-center items-center font-semibold">
                {price}{" "}
                <span className="ml-2">
                  <FaBangladeshiTakaSign />
                </span>
              </p>
            </div>
          </div>
          <div
            onClick={() => handleDelete(_id)}
            className="flex text-sm divide-x cursor-pointer"
          >
            <button
              type="button"
              className="flex items-center px-2 py-1 pl-0 space-x-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4 h-4 fill-current"
              >
                <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                <rect width="32" height="200" x="168" y="216"></rect>
                <rect width="32" height="200" x="240" y="216"></rect>
                <rect width="32" height="200" x="312" y="216"></rect>
                <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
              </svg>
              <span>Remove</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartData;
