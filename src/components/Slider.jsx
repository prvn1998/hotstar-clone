import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
const IMG_PATH_URL = 'https://image.tmdb.org/t/p/original';
import { HiChevronRight, HiChevronLeft  } from "react-icons/hi2";
const scrollWidth=window.innerWidth;


const Slider = () => {
  const [myData, setMyData] = useState([])
  const elementRef = useRef();

  useEffect(()=>{
    axios.get("https://api.themoviedb.org/3/trending/all/day?api_key=72651fb566c91a90f30511fd2a1a5748")
    .then((res)=> setMyData(res.data.results));
  },[]);

  const slideRight=(element)=>{
    element.scrollLeft+=scrollWidth-110
  }

  const slideLeft=(element)=>{
    element.scrollLeft-=scrollWidth-110
  }
  

  return (
    <div>
        <HiChevronLeft className='hidden md:block text-white absolute text-[35px] mx-5 mt-[175px] cursor-pointer'
        onClick={()=>slideLeft(elementRef.current)}/>
        <HiChevronRight className='hidden md:block text-white absolute text-[35px] mx-5 mt-[175px] right-0 cursor-pointer'
        onClick={()=>slideRight(elementRef.current)}/>

      <div className='flex overflow-x-auto px-16 py-5 w-full scrollbar-hide scroll-smooth' ref={elementRef}>      
        {myData.map((item, index)=>(        
          <img src={IMG_PATH_URL+item.backdrop_path} className='min-w-full md:h-[350px] 
          object-left-top object-cover mr-5 rounded-lg hover:border-[4px] border-gray-400 transition-all duration-200 '/>
        ))}
      </div>
    </div>
  )
}

export default Slider