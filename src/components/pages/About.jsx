import React from 'react'
import {about} from "../../data/dummydata"
import Heading from "../common/Heading"
const About = () => {
  return (
    <div>
     <section className='about'>
         <div className="container flex">
          {about.map((value,i)=>(
            <>
            <div className="left">
              <img src={value.cover} alt="" />
            </div>
            <div className="right">
              <Heading title="About Me"/>
              <p>{value.desc}</p>
              <p>{value.desc1}</p>
              <button>Download CV</button>
              <button className='primaryBtn'>Download CV</button>
            </div>
            </>
          ))}
         </div>
      </section>
    </div>
  )
}

export default About
