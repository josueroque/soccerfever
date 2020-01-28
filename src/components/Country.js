import React, { useState, useEffect, Fragment } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {getSeasonsAction} from '../store/actions/seasonsActions';
import {getLeaguesAction} from '../store/actions/leaguesActions';

import Navbar from './Navbar';

function Country(props){
    console.log(props);
    const leagues =useSelector(state=>state.leagues.leagues);
    const seasons =useSelector(state=>state.seasons.seasons);
    const [leagueId,updateleagueId]=useState('');
    const [season,updateSeason]=useState('');
    const [filter,updateFilter]=useState('');
    const dispatch=useDispatch();
   
    useEffect(()=>{
        const loadLeagues=()=>dispatch(getLeaguesAction(props.match.params.id)); 
        loadLeagues();
        const loadSeasons=()=>dispatch(getSeasonsAction()); 
        loadSeasons();
    },[dispatch,props.match.params.id])


   
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
                        id="season"
                        // onClick={e=>filterByTag(e.target.value)}
                        // onChange={e=>onTagChange(e.target.value)}
                        // value={tag}
                    //    defaultValue={ localStorage.getItem('tag')}
                        >
                               <option key={"none"}  value={"none"} >---Select a season---</option>
                             {
                                seasons.map(season=>
                                  
                                        <option key={season}  value={season}> {season}</option>
                                 
                                )
                            }                           
                    </select>        
                    </div>
                    <div className="col-sm-3">
                        <select className="form-control"
                      
                        name="season"
                        id="season"
                        // onClick={e=>filterByTag(e.target.value)}
                        // onChange={e=>onTagChange(e.target.value)}
                        // value={tag}
                    //    defaultValue={ localStorage.getItem('tag')}
                        >
                               <option key={"none"}  value={"none"} >---Select an option---</option>
                               <option key={"none"}  value={"none"} >Next fixtures</option>
                               <option key={"none"}  value={"none"} >Teams</option>
                         
                    </select>   

                    </div>
                    <div className="col-sm-3">
                    <button type="button" class="btn btn-primary">Search</button>
                    </div>    
                </div>
            </form>
        </Fragment>
    )
}

export default Country;