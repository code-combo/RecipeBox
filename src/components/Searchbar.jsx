import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

// styles
import "./Searchbar.css"

export default function () {

    const [term, setTerm] = useState("");
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        navigate(`/search?q=${term}`);
    }

  return (
    <div className='searchbar'>
        <form onKeyUp ={handleSubmit}>
            <label htmlFor="search">Search:</label>
            <input 
                type="text" 
                id="search"  
                onChange={e => setTerm(e.target.value)}
            />
        </form>
    </div>
  )
}
