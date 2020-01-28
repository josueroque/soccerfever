import{
    START_GET_TEAMS,
    GET_TEAMS_SUCCESS,
    GET_TEAMS_FAILURE,

} from '../types';

const initialState={
teams:[]
};

export default function users(state=initialState,action){
    switch(action.type){
        case START_GET_TEAMS:
            return{
                ...state
            } 
        case GET_TEAMS_SUCCESS:
            return{
                ...state,
                teams:action.payload,
                error:false,
            }
        case GET_TEAMS_FAILURE:
            return{
                ...state,
                teams:[],
                error:true,
            }    
        default:
            return state;
    }
}

