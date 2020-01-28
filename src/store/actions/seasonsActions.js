import{
    START_GET_SEASONS,
    GET_SEASONS_SUCCESS,
    GET_SEASONS_FAILURE,
} from '../types';
  
import {getAllSeasons} from '../../services/apiService';

export  function  getSeasonsAction  () {
      return async (dispatch)=>{
           dispatch(startGetSeasons());
           console.log('hola');
           try {
            const list=await getAllSeasons();
            console.log(list);
            dispatch(getSeasonsSuccess(list));
                 
           } catch (error) {
               console.log(error);
               dispatch(getSeasonsFailure());
           }
       }
   }
  
  export const getSeasonsSuccess=seasons=>({
      type:GET_SEASONS_SUCCESS,
      payload:seasons
  })

  export const startGetSeasons = () => ({
      type: START_GET_SEASONS
  })
  
  export const getSeasonsFailure = () => ({
      type: GET_SEASONS_FAILURE
  })
  

   
  
  