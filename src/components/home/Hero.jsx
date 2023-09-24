import React from 'react'
import {home} from "../../data/dummydata"
import Typewriter from "typewriter-effect"
const Hero = () => {
  return (
    <>
      <section className='hero'>
         {home.map((value, i)=>(
               <div className="heroContainer" key={i}>
                   <h3 data-aos="fade-right">{value.text}</h3>
                   <h1>
                     <Typewriter
                      options={{strings:[`${value.name}`,`${value.post}`,`${value.design}`],
                      autoStart:true,loop:true
                      }} />
                   </h1>
                   <p data-aos="flip-up">{value.desc}</p>
                   <button className="primaryBtn">Download CV</button>
               </div>
         ))}
      </section>
    </>
  )
}

export default Hero
