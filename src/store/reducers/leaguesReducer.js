import{
    START_GET_LEAGUES,
    GET_LEAGUES_SUCCESS,
    GET_LEAGUES_FAILURE,

} from '../types';

const initialState={
leagues:[]
};

export default function users(state=initialState,action){
    switch(action.type){
        case START_GET_LEAGUES:
            return{
                ...state
            } 
        case GET_LEAGUES_SUCCESS:
            return{
                ...state,
                leagues:action.payload,
                error:false,
            }
        case GET_LEAGUES_FAILURE:
            return{
                ...state,
                leagues:[],
                error:true,
            }    
        default:
            return state;
    }
}

