import React from 'react'
import quote from '../assets/quote.svg'
import backArrow from '../assets/back-arrow.svg';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <>
        <div className="main-container">
            <div className="part-container-1 pink-container">
                <div className="container">
                <img src={backArrow} alt="back" className='back'/>
                <div className="content">
                    <img src={quote} alt="some angels choose fur instead of wings" className='quote' />
                </div>
                </div>
              
            </div>
            <div className="part-container-2">
               <div className="container content">
               <h1 >Login to Pets<span className="pinkText">Weekly!</span></h1>
               <div className="input-container">
                    <div className='input-container-inside'>
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email"  />
                    </div>
                    <div className='input-container-inside'>
                        <label htmlFor="password">Password</label>
                        <input type="text" name="password"  />
                    </div>
               </div>
              
               <div className='input-container'>
                    <Link to="/">
                        <button className="btnPink btn input-container">Create an account</button>
                    </Link>
               </div>
              
               
                
               </div>
            </div>
        
        </div>
       
        </>
        
      
    )
}