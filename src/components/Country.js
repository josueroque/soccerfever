import React, { useState, useEffect, Fragment } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {getLeaguesAction} from '../store/actions/leaguesActions';
import {getFixturesAction} from '../store/actions/fixturesActions';
import {getTeamsAction} from '../store/actions/teamsActions';
import Navbar from './Navbar';

function Country(props){

    const leagues =useSelector(state=>state.leagues.leagues);
    const fixtures =useSelector(state=>state.fixtures.fixtures);
    const teams =useSelector(state=>state.teams.teams);
    const [leagueId,updateleagueId]=useState('');
    const [filter,updateFilter]=useState('');
    const dispatch=useDispatch();
   
    useEffect(()=>{
        const loadLeagues=()=>dispatch(getLeaguesAction(props.match.params.id)); 
        loadLeagues();

    },[props.match.params.id,dispatch])
    
    useEffect(()=>{
        console.log(filter);
       if (filter==='Fixtures' ){
        const loadFixtures=()=>dispatch(getFixturesAction(leagueId)); 
        loadFixtures();
       } else {
        const loadTeams=()=>dispatch(getTeamsAction(leagueId)); 
        loadTeams();
       }
    
    },[dispatch,filter,leagueId])

    return(
        <Fragment>
            <Navbar></Navbar>
            <form
              onSubmit={e=> {
                e.preventDefault();
 
            }}             
            >
                <br/>
                <h2>Select the filters of your search </h2>    
                <div className="row form-group filter">
                    <div className="col-sm-3">
                        <select className="form-control"
                      
                        name="league"
                        id="league"
                        // onClick={e=>filterByTag(e.target.value)}
                         onChange={e=>updateleagueId(e.target.value)}
                        // value={tag}
                    //    defaultValue={ localStorage.getItem('tag')}
                        >
                            <option key={"none"}  value={"none"} >---Select a league---</option>
 
                             {
                                leagues.map(league=>
                                  
                                        <option key={league.league_id}  value={league.league_id} >{league.name}</option>
                                 
                                )
                            }                           
                    </select>        
                    </div>

                    <div className="col-sm-3">
                        <select className="form-control"
                      
                        name="season"
                        id="season"
                        // onClick={e=>filterByTag(e.target.value)}
                         onChange={e=>updateFilter(e.target.value)}
                        // value={tag}
                    //    defaultValue={ localStorage.getItem('tag')}
                        >
                               <option key={"none"}  value={"none"} >---Select an option---</option>
                               <option key={"Fixtures"}  value={"Fixtures"} >Fixtures</option>
                               <option key={"Teams"}  value={"Teams"} >Teams</option>
                         
                    </select>   

                    </div>
                    <div className="col-sm-3">
                    {/* <input type="submit" class="btn btn-primary" value="Search" /> */}
                    </div>    
                </div>
            </form>
            <br/>
            {/* <h4>Selected Filter:{filter}</h4> */}

              { filter==="Fixtures" ?
                <div className="row">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Home Team</th>
                            <th scope="col">Away Team</th>
                            <th scope="col">Stadium</th>
                            </tr>
                        </thead>
                        <tbody>
                           { fixtures.map(fixture=>
                                <tr>
                                <th scope="row">{filter} {fixture.event_date}</th>
                                <td><img src={fixture.homeTeam.logo}alt="" className="logo"></img> {fixture.homeTeam.team_name}</td>
                                <td><img src={fixture.awayTeam.logo}alt="" className="logo"></img> {fixture.awayTeam.team_name}</td>
                                <td>{fixture.venue}</td>
                                </tr>
                            ) }
                         </tbody>
                       </table>   
                    </div>  
                    : 
                    filter==='Teams' ?
                    <div className="row">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Logo</th>
                            <th scope="col">City</th>
                            <th scope="col">Stadium</th>
                            </tr>
                        </thead>
                        <tbody>
                           { teams.map(team=>
                                <tr>
                                <th scope="row">{team.name}</th>
                                <td><img src={team.logo}alt="" className="logo"></img> </td>
                                <td> {team.venue_city}</td>
                                <td>{team.venue_name}</td>
                                </tr>
                            ) }
                         </tbody>
                       </table>   
                    </div> 
                    : <div></div> 
                   

                } 
                          
                

                
            
        </Fragment>
    )
}

export default Country;