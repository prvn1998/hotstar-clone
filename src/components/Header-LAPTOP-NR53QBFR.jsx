import React from 'react'
import logo from './../assets/images/logo-d-plus.svg'
import login from './../assets/images/user-3296.png'
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv } from 'react-icons/hi2';

// import {HiPlus, HiDotsVertical} from "react-icons/hi"
import HeaderItem from './HeaderItem';


const Header = () => {
    const menu = [
        {
            name:'HOME',
            icon:HiHome
        },
        {
            name:'SEARCH',
            icon:HiMagnifyingGlass
        },
        {
            name:'WATCH LIST',
            icon:HiStar
        },
        {
            name:'ORIGINALS',
            icon:HiPlayCircle
        },
        {
            name:'MOVIES',
            icon:HiTv
        }
    ];
  return (
    <div className='max-w-[100%] bg-black flex items-center justify-between p-5'>
        <div className='bg-black flex items-center gap-8'>
            <img src={logo} alt="logo" className='w-[60px] md:w-[80px] object-cover'/>
            {menu.map((item)=>(
                <HeaderItem name={item.name} Icon={item.icon}/>    
            ))}
        </div>
        <img src={login} alt="" className='bg-white rounded-full w-[40px]' />
    </div>
  )
}

export default Header