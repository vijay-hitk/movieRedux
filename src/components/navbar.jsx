import React from 'react'
import './navbar.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
    const allMovies = useSelector(state => state.app.movies);
  return (
    <div>
        <body>
    <nav>
        <input type="checkbox" id="check"></input>
        <label for="check" className="checkbtn">
            <i className="fas fa-bars"></i>
        </label>
        <label className="logo">Invact Movie</label>
        <ul>
            <li><Link to='/read' className="active" >WatchList ({allMovies.length})</Link></li>
            <li><Link to='/'>Add Movies</Link></li>
            
        </ul>
    </nav>
</body>

    </div>
  )
}

export default Navbar