import{
    START_GET_TEAMS,
    GET_TEAMS_SUCCESS,
    GET_TEAMS_FAILURE,
} from '../types';
  

  export  function  getUserAction  (user) {
      return async (dispatch)=>{
           dispatch(startGetUser());
           try {
               const user=localStorage.getItem('user');
               console.log(user);
               dispatch(getUserSuccess(user));
                 
           } catch (error) {
               console.log(error);
               dispatch(getUserFailure());
           }
       }
   }
  
   export  function  saveUserAction  (user) {
    return async (dispatch)=>{ 
         dispatch( startSaveUser());
         try {
            localStorage.setItem('name',user.name);
            localStorage.setItem('surname',user.surname);
            localStorage.setItem('tag',user.tag);
           
        //    console.log(user);
           await  dispatch(saveUserSuccess(user));
               
         } catch (error) {
             console.log(error);
             dispatch(getUserFailure());
         }
     }
 }

  export const getUserSuccess=user=>({
      type:GET_USER_SUCCESS,
      payload:user
  })


  export const startGetUser = () => ({
      type: START_GET_USER
  })
  
  export const getUserFailure = () => ({
      type: GET_USER_FAILURE
  })
  
export const saveUserSuccess=user=>({
    type:SAVE_USER_SUCCESS,
    payload:user
})

export const startSaveUser = () => ({
    type: START_SAVE_USER
})

export const SaveUserFailure = () => ({
    type: SAVE_USER_FAILURE
})

   
  
  