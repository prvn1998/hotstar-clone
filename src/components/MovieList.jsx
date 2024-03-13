import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import MovieCard from './MovieCard';
import { HiChevronRight, HiChevronLeft  } from "react-icons/hi2";


const MovieList = () => {

  const elementRef = useRef();

    const[MovieLists, setMovieLists]=useState([])

    useEffect(()=>{
        axios.get("https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf")
        .then((res)=> setMovieLists(res.data.results));        
    },[]);

    const slideRight=(element)=>{
      element.scrollLeft+=500;
    }
  
    const slideLeft=(element)=>{
      element.scrollLeft-=500;
    }

  return (
    <div >

        <HiChevronLeft className='hidden md:block text-white absolute text-[35px] mx-[-25px] mt-[175px] cursor-pointer'
        onClick={()=>slideLeft(elementRef.current)}/>
        <HiChevronRight className='hidden md:block text-white absolute text-[35px] mx-5 mt-[175px] right-0 cursor-pointer'
        onClick={()=>slideRight(elementRef.current)}/>

      <div className='flex overflow-x-auto scroll-smooth scrollbar-hide m-4' ref={elementRef}>
        {MovieLists.map((item)=>(
              <MovieCard movie={item}/>
          ))}
      </div>
        
    </div>
  )
}

export default MovieList