import React, { useEffect } from 'react'
import {FaStar} from 'react-icons/fa';
import { useState } from 'react';
import './StarRating.css';

const StarRating = () => {
    const [rating , setRating] = useState(null);
    const [hover, setHover] = useState(null);

    
    
    useEffect(()=>{
        localStorage.setItem('rating',rating);
    },[rating])
    
   
  return (
    <div>
        
       {
        [...Array(5)].map((star,index) => {
            const currentRating = index + 1;
            return (
              <label>
                    <input className='radio' type='radio' 
                           name='rating' 
                           value={currentRating} 
                           onClick={() =>setRating(currentRating) }
                          

                    />
                     <FaStar className='star'
                             size={30}
                             color = {currentRating <= (hover || rating ) ? '#ffc107' : '#e4e5e9'}
                             onMouseEnter={() => setHover(currentRating)}
                             onMouseLeave={() => setHover(null)}
                           
                             />
            </label>
            )
        })
       }
      <p>click star to rate</p> 
       <p>Rating : { localStorage.getItem('rating')   }</p>
    </div>
  )
}

export default StarRating