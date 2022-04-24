import React from 'react';
import Image from "next/image"

const Main = () => {
    return (
        <div className='main'>
            <div className="imageContainer">
                <Image src="/pictures/p1.png" layout="fill" objectFit="contain" />
            </div>
            <h1 className="title">All your files in one secure location,</h1>
            <h1 style={{ marginBottom: "30px" }} className="title">accessible anywhere.</h1>
            <span className="info">Fyler stores all of your most important files in one secure location.</span>
            <span className="info">Access them whenever you need, share and collaborate with</span>
            <span className="info">friends and family, and co-workers.</span>
            <button style={{ marginTop: "20px" }} className="btn">Get Started</button>
        </div>
    )
}

export default Main