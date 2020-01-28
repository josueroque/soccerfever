import{
    START_GET_FIXTURES,
    GET_FIXTURES_SUCCESS,
    GET_FIXTURES_FAILURE,
} from '../types';
  
import {getFixtures} from '../../services/apiService';

export  function  getFixturesAction  (leagueId) {
      return async (dispatch)=>{
           dispatch(startGetFixtures());
           try {
            const list=await getFixtures(leagueId);
            dispatch(getFixturesSuccess(list));
                 
           } catch (error) {
               console.log(error);
               dispatch(getFixturesFailure());
           }
       }
   }
  
  export const getFixturesSuccess=fixtures=>({
      type:GET_FIXTURES_SUCCESS,
      payload:fixtures
  });

  export const startGetFixtures = (country) => ({
      type: START_GET_FIXTURES
  });
  
  export const getFixturesFailure = () => ({
      type: GET_FIXTURES_FAILURE
  });
  

   
  
  