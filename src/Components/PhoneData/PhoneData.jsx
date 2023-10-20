import { useLoaderData } from "react-router-dom";
import PhoneDataCard from "../PhoneDataCard/PhoneDataCard";

const PhoneData = () => {
    const phoneData = useLoaderData()
    const brand = phoneData[0].brand_name;
    
    return (
        <div>
           <div className="max-w-screen-xl mx-auto my-5 grid grid-cols-1 md:grid-cols-2 gap-5">
            {
                phoneData.map(phones=> <PhoneDataCard key={phoneData._id} phones={phones}></PhoneDataCard>)
            }
           </div>
        </div>
    );
};

export default PhoneData;