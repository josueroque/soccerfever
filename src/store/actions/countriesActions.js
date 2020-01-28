import{
    START_GET_COUNTRIES,
    GET_COUNTRIES_SUCCESS,
    GET_COUNTRIES_FAILURE,
} from '../types';
  
import {getAllCountries} from '../../services/apiService';

export  function  getCountriesAction  (countries) {
      return async (dispatch)=>{
           dispatch(startGetCountries());
           console.log('hola');
           try {
            const list=await getAllCountries();
            console.log(list);
            dispatch(getCountriesSuccess(list));
                 
           } catch (error) {
               console.log(error);
               dispatch(getCountriesFailure());
           }
       }
   }
  
  export const getCountriesSuccess=countries=>({
      type:GET_COUNTRIES_SUCCESS,
      payload:countries
  })

  export const startGetCountries = () => ({
      type: START_GET_COUNTRIES
  })
  
  export const getCountriesFailure = () => ({
      type: GET_COUNTRIES_FAILURE
  })
  

   
  
  