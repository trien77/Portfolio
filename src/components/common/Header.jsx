import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {navlink} from "../../data/dummydata"
import logo from "../../data/images/logo.png"
import { Menu } from '@mui/icons-material'

const Header = () => {
    const [responsive,setResponsive]=useState(true)
  return (
    <header>
      <div className="container flexsb">

        <div className="logo">
            <img src={logo} alt="" data-aos="zoom-in-right" />
        </div>
        <div className={responsive ? "hideMenu":"nav"}>
            {navlink.map((links,i)=>(
             
                 <Link to ={links.url} key={i}>{links.text}{console.log(i)}</Link>
            ))}
        </div>

        <button className="toggle" onClick={()=>setResponsive(!responsive)}>
             <Menu className='icon'></Menu>
        </button>
       

      </div>
    </header>
  )
}

export default Header
