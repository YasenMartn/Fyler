import React from 'react'

const NewsLetter = () => {
  return (
    <div className='newsLetter'>
        <div className="letterContainer">
            <h2 className="title">Get early access today</h2>
            <span className="text">
                It only takes a minute to sign up and our free starter tier is extremely generous. 
                if you have any questions, our support team would be happy to help you.
            </span>
            <form className="formContainer">
                <input className='emailInput' type="email" placeholder='example@email.com' />
                <button className="btn">Get started for free</button>
            </form>
        </div>
    </div>
  )
}

export default NewsLetter