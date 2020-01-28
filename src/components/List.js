import React, {  useEffect, Fragment } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {getCountriesAction} from '../store/actions/countriesActions';
import { Link } from "react-router-dom";

  const List=()=>{
  
      const dispatch=useDispatch();
      const countries=useSelector(state=>state.countries.countries);
      useEffect(()=>{
        const loadCountries=()=>dispatch(getCountriesAction()); 
        loadCountries();
      },[dispatch])

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
                      
                          <button class="btn btn-default">
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