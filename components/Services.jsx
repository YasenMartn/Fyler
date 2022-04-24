import Image from 'next/image';
import React from 'react';
import {servicesData} from "../data/data"

const Services = () => {
  return (
    <div className='services'>
        {servicesData.map(service =>(
          <div className="serviceContainer" key={service.id}>
            <div className="imgContainer">
              <Image src={service.image} width='80px' height="80px" objectFit='contain' />
            </div>
            <div className="infoContainer">
              <h2 className="title">{service.title}</h2>
              <span className="desc">{service.desc}</span>
            </div>
            
          </div>
        ))}
    </div>
  )
}

export default Services