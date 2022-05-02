import React from 'react';
import {testimons} from "../data/data"

const Testimonials = () => {
  return (
    <div className='testimonials'>
        {testimons.map(item => (
            <div className='testimonContainer' key={item.id}>
                <div className="top">
                    {item.desc}
                </div>
                <div className="bottom">
                    <div className="picContainer">h</div>
                    <div className="infoContainer">
                        <span className="name">{item.name}</span>
                        <span className="job">{item.job}</span>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Testimonials 
