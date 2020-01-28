import{
    START_GET_LEAGUES,
    GET_LEAGUES_SUCCESS,
    GET_LEAGUES_FAILURE,
} from '../types';
  
import {getAllLeagues} from '../../services/apiService';

export  function  getLeaguesAction  (country) {
      return async (dispatch)=>{
           dispatch(startGetLeagues());
           try {
            const list=await getAllLeagues(country);
            dispatch(getLeaguesSuccess(list));
                 
           } catch (error) {
               console.log(error);
               dispatch(getLeaguesFailure());
           }
       }
   }
  
  export const getLeaguesSuccess=leagues=>({
      type:GET_LEAGUES_SUCCESS,
      payload:leagues
  })

  export const startGetLeagues = (country) => ({
      type: START_GET_LEAGUES
  })
  
  export const getLeaguesFailure = () => ({
      type: GET_LEAGUES_FAILURE
  })
  

   
  
  