import{
    START_GET_SEASONS,
    GET_SEASONS_SUCCESS,
    GET_SEASONS_FAILURE,

} from '../types';

const initialState={
seasons:[]
};

export default function users(state=initialState,action){
    switch(action.type){
        case START_GET_SEASONS:
            return{
                ...state
            } 
        case GET_SEASONS_SUCCESS:
            return{
                ...state,
                seasons:action.payload,
                error:false,
            }
        case GET_SEASONS_FAILURE:
            return{
                ...state,
                seasons:[],
                error:true,
            }    
        default:
            return state;
    }
}

