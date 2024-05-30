import Swal from "sweetalert2";



const AddPhones = () => {
    const handleAddPhones = event =>{
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const brand_name = form.brand_name.value;
        const ram = form.ram.value;
        const storage = form.storage.value;
        const rating = form.rating.value;
        const details = form.details.value;
        const image = form.image.value;
        const price = form.price.value;
        const operating_system = form.operating_system.value;
        const camera = form.camera.value;
       

        const newPhoneData ={
            name,brand_name,ram,storage,rating,details,image,price,camera, operating_system
        }
        
        console.log(newPhoneData);
        //send data to the server
        fetch('https://phone-shop-server-rho.vercel.app/phones', {
          method:"POST",
          headers:{
            'content-type': 'application/json'
          },
          body: JSON.stringify(newPhoneData)
        })
        .then(res=> res.json())
        .then(data => {
          if(data.insertedId){
            Swal.fire({
              icon: 'success',
              title: 'Success',
              text: 'Successfully added new phone',
             
            })
          }
        })
        
    }


  return (
    <div className="my-10 mb-20">
      <div className="max-w-screen-xl mx-auto bg-[#F4F3F0] p-10 rounded-xl shadow-lg">
        <div className="text-center space-y-8">
          <h1 className="text-5xl my-5 font-bold">Add New Phones</h1>
         
        </div>

        <div >
          <form onSubmit={handleAddPhones}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text font-bold">Name</span>
                 
                </label>
                <input
                  type="text"
                  name="name"
                  
                  required
                  placeholder="Enter Phone Model Name"
                  className="input input-bordered w-full "
                />
                
              </div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text font-bold">Brand Name</span>
                 
                </label>
                
                <select name="brand_name" required  placeholder="Apple"  className="input input-bordered w-full " >
                <option>Apple</option>
                <option>Samsung</option>
                <option>Xiaomi</option>
                <option>Google</option>
                <option>OnePlus</option>
                <option>Huawei</option>
                </select>
              </div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text font-bold">Price</span>
                 
                </label>
                <input
                  type="text"
                  name="price"
                  required
                  placeholder="Price"
                  className="input input-bordered w-full"
                />
                
              </div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text font-bold">Operating System</span>
                 
                </label>
                <input
                  type="text"
                  name="operating_system"
                  required
                  placeholder="Operating System "
                  className="input input-bordered w-full"
                />
                
              </div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text font-bold">Ram</span>
                 
                </label>
                <select name="ram" required placeholder="Ram"  className="input input-bordered w-full " >
                <option>2 GB</option>
                <option>3 GB</option>
                <option>4 GB</option>
                <option>6 GB</option>
                <option>8 GB</option>
                <option>12 GB</option>
                <option>16 GB</option>
                
                </select>
                
              </div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text font-bold">Storage</span>
                 
                </label>
                <select name="storage" required  placeholder="Storage"  className="input input-bordered w-full " >
                <option>16 GB</option>
                <option>32 GB</option>
                <option>64 GB</option>
                <option>128 GB</option>
                <option>256 GB</option>
                <option>512 GB</option>
                <option>1 TB</option>
                <option>2 TB</option>
                <option>3 TB</option>
                
                </select>
                
              </div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text font-bold">Rating</span>
                 
                </label>
                <select name="rating" required  placeholder="Rating"  className="input input-bordered w-full " >
                <option>.5</option>
                <option>1</option>
                <option>1.5</option>
                <option>2</option>
                <option>2.5</option>
                <option>3</option>
                <option>3.5</option>
                <option>4</option>
                <option>4.5</option>
                <option>5</option>
               
                </select>
                
              </div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text font-bold">Camera</span>
                 
                </label>
                <select name="camera" required  placeholder="Camera"  className="input input-bordered w-full " >
                <option>2 MP</option>
                <option>5 MP</option>
                <option>8 MP</option>
                <option>12 MP</option>
                <option>16 MP</option>
                <option>32 MP</option>
                <option>48 MP</option>
                <option>50 MP</option>
                <option>64 MP</option>
                <option>112 MP</option>
                <option>150 MP</option>
                <option>200 MP</option>
                
               
                </select>
                
              </div>
           
              
              
            </div>
              
             
            <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text font-bold">Details</span>
                 
                </label>
                
                <textarea  name="details" required rows="4" className="block p-2.5 input input-bordered rounded-lg w-full text-sm" placeholder="Enter Phone details"></textarea>
                
              </div>

            <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text font-bold">Image Url</span>
                 
                </label>
                <input
                  type="text"
                  name="image"
                  required
                  placeholder="Phone Image"
                  className="input input-bordered w-full"
                />
                
              </div>

              <button
  className="middle none center w-full rounded-lg my-5 bg-[#3839AF] py-3 px-6 font-sans text-xs font-bold uppercase text-white "
  data-ripple-light="true"
>
Add Phone
</button>
          </form>
        </div>
      </div>
    </div>
  );
};






export default AddPhones;