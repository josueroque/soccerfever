import{
    START_GET_COUNTRIES,
    GET_COUNTRIES_SUCCESS,
    GET_COUNTRIES_FAILURE,

} from '../types';

const initialState={
countries:[]
};

export default function users(state=initialState,action){
    switch(action.type){
        case START_GET_COUNTRIES:
            return{
                ...state
            } 
        case GET_COUNTRIES_SUCCESS:
            return{
                ...state,
                countries:action.payload,
                error:false,
            }
        case GET_COUNTRIES_FAILURE:
            return{
                ...state,
                countries:{},
                error:true,
            }    
        default:
            return state;
    }
}
