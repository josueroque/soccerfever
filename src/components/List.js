import React, { useState, useEffect } from 'react';
import {getAllCountries} from '../services/apiService';


const List=()=>{
    const [countries ,updateCountries]=useState([]);

    useEffect(()=>{
    //   const list= getAllCountries();
       getCountries();
    },[])

    async function getCountries(){
     const list=  await getAllCountries();
     console.log(list)
     updateCountries(list);
     return list;
    }

    return(
        <div className="row" >
            {
               countries.length > 0 ? countries.map(country=>
                    <div className="col-sm-3">{country.country}</div>
                ) : <div></div>
            }
            Hola
        </div>
        
        
        )
}
export default List;