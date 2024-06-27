import React, { useState } from 'react'
import './CustomModal.css';
import { useSelector } from 'react-redux';
import StarRating from './StarRating';
import Review from './review';

function CustomModal({id , showPopup , setShowpopup}) {
    const allMovies = useSelector(state => state.app.movies);
    const singleMovie = allMovies.filter(ele => ele.id === id);
    


  return (
   <>
        <div className='modalBackground'>
          
            <div className='modalContainer'>
            <button onClick={() => setShowpopup(false)}>Close X</button>
                <h1>{singleMovie[0].Title}</h1>
               
                <StarRating/>
                <Review/>
               
            </div>
        </div>
   
   </>
  )
}

export default CustomModal