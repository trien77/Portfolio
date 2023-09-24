import React from 'react'
import Heading from "../common/Heading"
import {services} from "../../data/dummydata"
const Services = () => {
  return (
   <section className="services">
     <div className="container">
        <Heading title="Services"/>
            <div className="content grid3">
                {services.map((value,i)=>(
                <div className="box">
                    <i className='icon'>{value.icon}</i>
                    <i>{value.title}</i>
                    <i>{value.desc}</i>
                </div>
                ))}
            </div>
     </div>
   </section>
  )
}

export default Services
