import React, { useState } from 'react';
import "./home.css";
import Logo from "../../assets/git.png"
import axios from "../../assets/axios"
import { useNavigate } from 'react-router';
import Users from '../../pages/Users';
export default function HomeSection(props) {
    const [query, setQuery] = useState(""); 
    const [unfill,setUnfill] = useState(false);
    const [data,setData] = useState();
    let navigate = useNavigate();
   
    const handleFetch = (e) => {
		e.preventDefault();
        if(query){
             axios.get("/search/users?q=" + query ).then((res)=> {
                setData(res.data.items);
                console.log(res.data.items)
                navigate(`/users/${query}`)
            }).catch(err => console.log(err)).finally(
                setQuery("")
            )
            
        }else{
            setUnfill(true)
        }
	};


    return (
        <div>
   < div className="prod1">
            <h1 className="h1">WELCOME </h1>
            <img src={ Logo} alt="Logo" />

        </div>
        <div className="container">
            <div className="search-form">
            <p>Find code, projects, and people on GitHub:</p>
        <div class="input-group mb-3">
    <input type="text" class="form-control" value={query} onChange={(event) => {setQuery(event.target.value)
    setUnfill(false)}} placeholder="Search"/>
    <button class="btn btn-success" type="submit" onClick={handleFetch}>Search</button> 
          
            </div>
            {unfill && <span className='error-text'>Please fill in the form </span>}
           
  </div>
 
 

        </div>
        </div>
     
    )
}
