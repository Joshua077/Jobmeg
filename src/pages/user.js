import React, { useState,useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from '../assets/axios';
import { Link } from "react-router-dom";
import "../Components/Home/home.css"
import Repo from '../Components/User/repo';
 
 export default function User(props) {
    let {user} = useParams();
    const [userInfo, setUserInfo] = useState("");
    const [repos, setRepos] =useState()
    const [issues,setIssues] = useState()
    useEffect(()=>{
        const fetchDetails = async () =>{
            try{
const response = await Promise.all([
    axios.get(`/users/${user}`),
    axios.get(`users/${user}/repos`),
    axios.get("search/issues?q="+user)
    
]);
console.log(response[2].data.items)
setUserInfo(response[0].data)
setRepos(response[1].data)
setIssues(response[2].data)
;

            } catch(error){
                    console.log(error)
            }
        };
        fetchDetails();
    }, []);

    return (
        <>
            <div className="container">
                <h1 className="pageHeader"> Welcome to {user} page</h1>
                <div className='row'>
                    <div className='col-12'>
                        <div className='individual-info'>
                            <div className='image'>
                                <img src={userInfo?.avatar_url} alt="lOgo"/>
                            </div>
                            <div className='user-content'>
                               
                                <p>Name : {userInfo?.name}</p>
                                <p> Bio :  {userInfo?.bio}</p>
                                <p> Socials :{userInfo?.followers} Followers . Following{userInfo?.following}</p>
                                {userInfo?.location &&
                <p> Location: {userInfo?.location}</p>
                                }
                               {userInfo?.blog &&
                <p> Blog: {userInfo?.blog}</p>
                                }
                                <p> <a href={ userInfo?.html_url}> View GitHub Profile</a> </p>
                               
                            </div>

                        </div>
                        <div>
                        {
                            repos ? repos.map((repo) =>{
                                return <Repo repo={repo} key={repo.id}/>
                            }):(
                                <h1>No Repo Found </h1>
                            )
                        }
                     
                    </div>
                    </div>
                   
                </div>


            </div>
        </>
    )
}
