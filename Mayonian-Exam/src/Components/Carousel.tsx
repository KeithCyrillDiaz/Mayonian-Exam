import React, {useEffect} from "react";
import { CarouselImages } from "../lib/MockData";
import Swiper from "swiper";
import { Autoplay } from 'swiper/modules';
import "swiper/swiper-bundle.css";

Swiper.use([Autoplay]);
const CarouselImage: React.FC = () => {
    
    const {backgroundURL, castle} = CarouselImages
    return(
        <div className=" swiper-slide relative h-[200px] bg-defaultBlue rounded-[7px] overflow-hidden">
            <Labels/>
            <img 
                src={castle} 
                alt="Castle Background" 
                className="absolute top-0 left-0 w-full h-[370px] object-cover rounded-[7px] opacity-30"
            />
            <img 
                src={backgroundURL} 
                alt="Background" 
                className="absolute top-0 left-0 w-full h-full object-cover rounded-[7px] opacity-5"
            />
            <Character/>
         
        </div>
    )
}


const Labels: React.FC = () => {
    return(
      <>
            <span className="text-white font-bold text-[15px] absolute z-10 left-7 top-10">
                RESCUE
            </span>
            <span className="text-defaultYellow font-bold text-[15px] absolute z-10 left-7 top-20">
                BONUS
            </span>
            <span className="text-white font-bold text-[15px] absolute z-10 left-7 top-[120px] w-[100px] h-[100px] ">
                WE ARE HERE FOR YOU
            </span>
      </>
    )
}

const Character: React.FC = () => {
    const {character} = CarouselImages
    return(
        <div className="absolute h-full w-full z-10">   
            <div className="relative h-full overflow-hidden"> {/* Set height as needed */}
                <Letters/>
                <img 
                    src={character} 
                    alt="Character" 
                    className="absolute top-3 left-[175px] w-[200px] h-[370px] z-10 object-cover" 
                />
               <CircleLightnings/>
            </div>
        </div>
           
        
    )
}


const CircleLightnings: React.FC = () => {
    const {circleLightning} = CarouselImages
    return(
      <>
        <img 
            src={circleLightning} 
            alt="Character" 
            className="absolute top-3 left-[267px] w-[100px] h-[100px] object-cover" 
        />
            <img 
            src={circleLightning} 
            alt="Character" 
            className="absolute top-[87px] right-[110px] w-[120px] h-[120px] object-cover" 
        />
      </>
    )
}


const Letters: React.FC = () => {
    return(
      <>
        <span className="text-white font-bold text-[35px] opacity-70 absolute top-10 left-[180px] -rotate-[35deg]">
            F
        </span>
        {/* upper-left 8 */}
        <span className="text-white font-bold text-[35px] opacity-70 absolute top-2 left-[190px] -rotate-[35deg]">
            8
        </span>
           {/* bottom-right 8 */}
        <span className="text-white font-bold text-[35px] opacity-70 absolute top-[150px] right-4 rotate-[35deg]">
            8
        </span>
      </>
    )
}


export const Carousel: React.FC = () => {

    useEffect(() => {
        const swiper = new Swiper(".swiper-container", {
          slidesPerView: 1,
          loop: true,
          autoplay: {
            delay: 3000, // Set delay for autoplay
            disableOnInteraction:false
          },
        });
    
        return () => {
          swiper.destroy();
        };
      }, []);

    return(
        <div className="swiper-container shadow-lg overflow-hidden h-full">
            <div className="swiper-wrapper">
               {Array.from({length:3}).map((_, index) => (
                     <CarouselImage key={index}/>
               ))}
            </div>
        </div>
    )
}
