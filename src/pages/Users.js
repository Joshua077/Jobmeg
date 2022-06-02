import React, { useState,useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from '../assets/axios';
import { Link } from "react-router-dom";
import "../Components/Home/home.css"
export default function Users(props) {
    let {users} = useParams();
    const [data,setData] = useState();
    useEffect(()=>{
        axios.get("/search/users?q=" + users, {
            params:{
                page:5,
                per_page:6
            }
        } ).then((res)=> {
            setData(res.data.items);
            console.log(res.data.items)
            
        }).catch(err => console.log(err))
        .finally(
           
        )
    },[])

    return (
        <div className='search-output'>
           <h1>Github Search User</h1>
            
             <div className="search-results">
 {data && data.length > 0 && data.map((user) => { return (
     <div  key={ user.login}className='user-Result'>
         
         <div className='user-image'>
             <img src={ user.avatar_url}/>
         </div>
         <div>
         <h5>{user.login}</h5>
            <p>{user.id}</p>  
           <Link to={`/individual/${user.login}`} > View User Profile</Link>
         </div>
            
     </div>
 )
     
 })}
 {data && data.length === 0 && <h1>User not Found</h1>}
                        
                </div>
        </div>
    )
}
