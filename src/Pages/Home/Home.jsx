import { useLoaderData } from "react-router-dom";
import Header from "../../Components/Header/Header";
import BrandCard from "../../Components/BrandCard/BrandCard";

const Home = () => {
    const brands = useLoaderData();
    return (
        <div className="row text-center no-gutters" >
            <Header></Header>
            <div data-aos="fade-up"
     data-aos-duration="3000" className="my-10">
            <div className="text-center space-y-5 ">
                <h1 className="text-4xl font-bold text-[#3839AF]">Discover the Latest in Mobile Innovation</h1>
                <p className="text-2xl font-medium w-2/3 mx-auto ">Explore our wide selection of cutting-edge smartphones from top brands. From flagship powerhouses to budget-friendly gems, we have the perfect device to keep you connected and in touch with the future.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-screen-xl mx-auto p-5 md:p-10 my-10">
                {
                    brands.map(brand => <BrandCard key={brand.id} brand={brand}></BrandCard>)
                }
            </div>

            
            </div>
        </div>
    );
};

export default Home;