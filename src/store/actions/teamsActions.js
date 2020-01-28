import{
    START_GET_TEAMS,
    GET_TEAMS_SUCCESS,
    GET_TEAMS_FAILURE,
} from '../types';
  
import {getTeams} from '../../services/apiService';

export  function  getTeamsAction  (leagueId) {
      return async (dispatch)=>{
           dispatch(startGetTeams());
           try {
            const list=await getTeams(leagueId);
            dispatch(getTeamsSuccess(list));
                 
           } catch (error) {
               console.log(error);
               dispatch(getTeamsFailure());
           }
       }
   }
  
  export const getTeamsSuccess=teams=>({
      type:GET_TEAMS_SUCCESS,
      payload:teams
  });

  export const startGetTeams = (leagueId) => ({
      type: START_GET_TEAMS
  });
  
  export const getTeamsFailure = () => ({
      type: GET_TEAMS_FAILURE
  });
  

   
  
  