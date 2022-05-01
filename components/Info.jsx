import Image from 'next/image'
import React from 'react'

const Info = () => {
    return (
        <div className='infoPage'>
            <div className="left">
                <div className="imgContainer">
                    <Image src="/pictures/p2.png" layout='fill' objectFit='contain' />
                </div>
            </div>
            <div className="right">
                <h1 className="title">Stay productive, wherever you are.</h1>
                <span className="text">
                    Never let location be an issue when accessing your files.
                    Fyler has you covered for all of your file storage needs.
                </span>
                <span className="text">
                    Securely share files and folders with friends, family and collegues for live collaboration.
                    No email attachements required.
                </span>
                <span className="text">See how Fyler works.</span>
            </div>
        </div>
    )
}

export default Info