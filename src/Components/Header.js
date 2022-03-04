import React,{useState} from 'react'
import '../Style/Header.css'
import {MenuOutlined} from '@material-ui/icons'
import { Data } from './Data'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
export default function Header() {
    const [open,setOpen] = useState(false)

    const showMenu = () => {
        setOpen(!open)
    }
    const closeMenu=()=>{
       setOpen(!open)
    }

  return (
       <header>
            <nav>
              <div className='logo'>
                <h1>ACan.</h1> 
                </div>
                <ul className='ul-items'>
                 <li>
                    <Link to="#">Home</Link>
                 </li>
                 <li>
                    <Link to="#">Projects</Link>
                
                 </li>
                 <li>
                    <Link to="#">About</Link>
                 </li>
                 <li>
                    <Link to="#">Contact</Link>
                 </li>
                </ul>
                <div className='h-menu'>
                <MenuOutlined className='menu' onClick={showMenu}/>
               </div>
            </nav>

            <nav className={open ? 'slider active' : 'slider'}>
             <li className='x' onClick={closeMenu}><a href="#">X</a></li>
                <ul className='slider-ul' onClick={showMenu}>
                    {Data.map((item,index) => {
                        return (
                            <li key={index} className={item.className}>
                                <Link to={item.path}>{item.text}</Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
       </header> 
  )
}
