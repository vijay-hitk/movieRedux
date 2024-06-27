import React, { useEffect  , useState} from 'react'
import './Read.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMovie, showMovies } from '../features/moviedetailSlice';
import CustomModal from './CustomModal';
import { Link, useNavigate } from 'react-router-dom';

const Read = () => {
    const {check} = useSelector(state => state.app);
    console.log('from read',check);
   
    const dispatch = useDispatch();
    const {movies , loading } = useSelector((state) => state.app);
    const [id , setId] = useState();
    const [showPopup , setShowpopup] = useState(false);
   

    useEffect(() =>{
        dispatch(showMovies());
    },[])

if(loading){
    return (<h2>loading...</h2>)
}


  return (
    <>
        {showPopup && <CustomModal id={id} showPopup={showPopup} setShowpopup={setShowpopup}/>}
        <div className='movie'>

        {movies && movies.map((data)=>(
             <div class="card" key={data.id}>
  
             <div class="container">
                  <h4><b>{data.Title}</b></h4>
                 <p>{data.Description}</p>
                 <p>{data.ReleaseYear}</p>
                 <p>{data.Genre}</p>
                 <p>{data.watch}</p>
                 <Link  onClick={() => [setId(data.id),setShowpopup(true)]}>View</Link><br/>
                 <Link onClick={()=> {dispatch(deleteMovie(data.id));}}>Delete</Link><br/>
                 <Link to={`/edit/${data.id}`}>Edit</Link>
            </div>
           

            </div>
        ))}
        </div>
        
       
    </>
  )
}

export default Read