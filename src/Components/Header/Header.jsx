import { Typography } from "@material-tailwind/react";



const Header = () => {
    return (
        <div >
         <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="carousel w-full md:h-[90vh] ">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="/banner1.png" data-aos="fade-down" className="w-full" />
    <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/25">
        <div className="w-3/4 text-center md:w-2/4">
        <Typography
              variant="h1"
              color="white"
              className="mb-4 text-2xl font-bold leading-5  md:text-4xl lg:text-7xl"
            >
              Titanium. So strong. So light. So Pro.
            </Typography>

        </div>
    </div>
    <div data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500" className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img data-aos="flip-right" src="/banner2.png" className="w-full" />
    <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/25">
        <div className="w-3/4 text-center md:w-2/4">
        <Typography
              variant="h1"
              color="white"
              className="mb-4 text-2xl font-bold leading-5 md:text-4xl lg:text-6xl"
            >
             Masterpiece in sight
            </Typography>
        </div>
    </div>
    <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="/banner3.png" className="w-full" />
    <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/25">
        <div className="w-3/4 text-center md:w-2/4">
        <Typography
              variant="h1"
              color="white"
              className="mb-4 text-2xl font-bold leading-5 md:text-4xl lg:text-6xl"
            >
             The Shape of Power
            </Typography>

        </div>
    </div>
    <div data-aos="zoom-out-up" className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="/banner4.png" className="w-full" />
    <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/25">
        <div className="w-3/4 text-center md:w-2/4">
        <Typography
              variant="h1"
              color="white"
              className="mb-4 text-2xl font-bold leading-5 md:text-4xl lg:text-6xl"
            >
              Nothing....
            </Typography>
        </div>
    </div>
    <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Header;