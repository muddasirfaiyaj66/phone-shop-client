import { useLoaderData, useParams } from "react-router-dom";
import PhoneDataCard from "../PhoneDataCard/PhoneDataCard";

const PhoneData = () => {
    
    const phoneData = useLoaderData()
    const {brand_name} =useParams()
   const filterPhones = phoneData.filter(data=> data.brand_name === brand_name)
   
    
    const brand = filterPhones[0].brand_name;
    console.log(brand);
    
    return (
        <div>
            <div>
                <img src={brand_name==='Apple'? 'https://i.ibb.co/0VPcBGB/iphone-15-pro-banner-desktop-en.jpg' : brand_name==='Samsung'? 'https://i.ibb.co/VDZ0gjw/200510-samsung-galaxy-special-offers.jpg' : brand_name==='Google'? 'https://i.ibb.co/dpW981s/pixel8-pro-desktop-banner-bay-buynow.png' :brand_name==='OnePlus'? 'https://i.ibb.co/m4JnZPB/Epb-JVe-TVEAAk5-Wk.jpg' :brand_name==='Xiaomi'? 'https://i.ibb.co/x8h7vmf/n.jpg' :brand_name==='Huawei'? 'https://i.ibb.co/fMfPb9B/P50-pocket-teasing-KV-web.jpg' : ''} alt="" />
            </div>
           <div className="max-w-screen-xl mx-auto my-5 grid grid-cols-1 md:grid-cols-2 gap-5">
            {
                filterPhones.map(phones=> <PhoneDataCard key={phones._id} phones={phones}></PhoneDataCard>)
            }



           </div>
        </div>
    );
};

export default PhoneData;