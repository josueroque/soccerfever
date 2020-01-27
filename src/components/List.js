import React, { useState, useEffect, Fragment } from 'react';
import {getAllCountries} from '../services/apiService';
import Countries from './Country';
import { Link } from "react-router-dom";

const List=()=>{
    const [countries ,updateCountries]=useState([]);

    useEffect(()=>{

       getCountries();
    },[])

    async function getCountries(){
     const list=  await getAllCountries();
     console.log(list)
     updateCountries(list);
     return list;
    }

    return(
        <Fragment>

                                                
                           
        <div className="row" >
            {
               countries.length > 0 ? countries.map(country=>
                <Link   to={{
                    pathname: `/country/${country.country}` , 
                    state:{  
                        country:`${country.country}`
                                                     
                     }
                   } }
        >  
                    <div className="col-sm-3 country-button"> 
                    {/* <button class="btn btn-primary bouton-image monBouton" style={{backgroundImage:country.flag}} /> */}
                    {/* <img class="img-responsive center-block" src={country.flag} alt="Your Alt Text" /> */}
                   
                    <button class="btn btn-default">
                     {/* <p> {country.country} </p>   */}
                     <img src={country.flag} alt="" ></img> 
                    </button>
                   </div>
                   </Link>
                ) : <div></div>
            }
            
        </div>
     
        </Fragment>
        
        
        )
}
export default List;