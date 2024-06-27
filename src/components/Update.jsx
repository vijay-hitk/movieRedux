import React, { useEffect  ,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updateMovie } from '../features/moviedetailSlice';

const Update = () => {
const {id} = useParams();
const {movies,loading} = useSelector(state => state.app);
const [updateData , setUpdateData] = useState();
const dispatch = useDispatch();
const navigate = useNavigate();

useEffect(() => {
    if(id){
        const singleMovie = movies.filter((ele) => ele.id === id);
        setUpdateData(singleMovie[0]);
    }
},[]);


    const newData = (e) =>{
        setUpdateData({...updateData , [e.target.name] : e.target.value})

    }
    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(updateMovie(updateData));
        navigate('/read');


    }

  return (
    <>
         <div className="container" id='form'>
                 <h1>Edit the Movie</h1>
            <form className ="box"  onSubmit={handleUpdate}>
               
                <input type ="text" placeholder='Enter Movie Title' name='Title'  required onChange={newData} value={updateData && updateData.Title}></input>
                <input type ="text" placeholder='Enter Movie Description' name='Description' onChange={newData} value={updateData && updateData.Description}></input>
                <input type ="text" placeholder='Enter Release Year' name='ReleaseYear' onChange={newData} value={updateData && updateData.ReleaseYear}></input>
                <input type ="text" placeholder='Enter Genre' name='Genre' onChange={newData} value={updateData && updateData.Genre}></input>
                 watched<input type = "radio" name="watch" value="Watched" onChange={newData} checked = {updateData && updateData.watch ==='watched'} /> 
                unwatched<input type = "radio" name="watch" value="unwatched" onChange={newData} checked = {updateData && updateData.watch ==='unwatched'}/> 
                {/* <input type ="checkbox" value="watched" onChange={getMovieData}/> */}<br/>
                <button type='submit'>Update watchlist</button>
               
            </form>
    </div>
    </>
  )
}
export default Update