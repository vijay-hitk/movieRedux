import React from 'react'
import './Create.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createMovie} from '../features/moviedetailSlice';
import { useNavigate } from 'react-router-dom';


function Create() {
    const [movies , setMovies] = useState({});
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const getMovieData = (e) => {

        setMovies({...movies , [e.target.name] : e.target.value} );
        console.log(movies);

    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(createMovie(movies));
        navigate('/read');

    }

  



  return (
    <div className="container" id='form'>
                 <h1>Add Movies</h1>
            <form className ="box" onSubmit={handleSubmit}>
               
                <input type ="text" placeholder='Enter Movie Title' name='Title'  required onChange={getMovieData}></input>
                <input type ="text" placeholder='Enter Movie Description' name='Description' onChange={getMovieData}></input>
                <input type ="text" placeholder='Enter Release Year' name='ReleaseYear' onChange={getMovieData}></input>
                <input type ="text" placeholder='Enter Genre' name='Genre' onChange={getMovieData}></input>
                 watched<input type="radio"  name='watch' value='watched' onChange={getMovieData}/>
                 unwatched<input type="radio" name='watch' value='unwatched' onChange={getMovieData}/>
                
                   
                 

                <button type='submit'>Add to watchlist</button>
               
            </form>
    </div>
  )
}

export default Create;