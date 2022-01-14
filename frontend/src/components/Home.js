import React from 'react'
import pawsDesktop from '../assets/paws-desktop.svg'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
        <div className="container">
             <h1 className='center'>Welcome to Pets<span className="pinkText">Weekly!</span></h1>
             <div className="center">
                 <Link to="/register">
                    <button className="btnWhite btn"> Register</button>
                 </Link>
                 <span className="space"></span>
                 <Link to="/login">
                    <button className="btnPink btn">Log In</button>
                 </Link>
                 
             </div>
        </div>
        <img src={pawsDesktop} alt="paws" className='pawsDesktop' />
        </>
        
      
    )
}