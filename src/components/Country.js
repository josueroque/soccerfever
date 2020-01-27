import React, { useState, useEffect, Fragment } from 'react';
import {getAllLeagues,getAllSeasons} from '../services/apiService';
import SideMenu from './SideMenu';
import Navbar from './Navbar';

function Country(props){
    const [leagues ,updateLeagues]=useState([]);

    useEffect(()=>{

       getLeagues();
    },[])

    async function getLeagues(){
   
     const list=  await getAllLeagues(props.match.params.id);
     console.log(list)
     updateLeagues(list);
     return list;
    }
    return(
        <Fragment>
            <Navbar></Navbar>
            <form>
                <br/>
                <h2>Select the filters of your search and click on Show</h2>    
                <div className="row form-group filter">
                    <div className="col-sm-3">
                        <select className="form-control"
                      
                        name="league"
                        id="league"
                        // onClick={e=>filterByTag(e.target.value)}
                        // onChange={e=>onTagChange(e.target.value)}
                        // value={tag}
                    //    defaultValue={ localStorage.getItem('tag')}
                        >
                            <option key={"none"}  value={"none"} >---Select a league---</option>
 
                             {
                                leagues.map(league=>
                                  
                                        <option key={league.name}  value={league.name} >{league.name}</option>
                                 
                                )
                            }                           
                    </select>        
                    </div>
                    <div className="col-sm-3">
                        <select className="form-control"
                      
                        name="season"
                        id="league"
                        // onClick={e=>filterByTag(e.target.value)}
                        // onChange={e=>onTagChange(e.target.value)}
                        // value={tag}
                    //    defaultValue={ localStorage.getItem('tag')}
                        >
                             {
                                leagues.map(league=>
                                  
                                        <option key={league.name}  value={league.name} >{league.name}</option>
                                 
                                )
                            }                           
                    </select>        
                    </div>

                </div>
            </form>
        </Fragment>
    )
}

export default Country;