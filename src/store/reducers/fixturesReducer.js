import{
    START_GET_FIXTURES,
    GET_FIXTURES_SUCCESS,
    GET_FIXTURES_FAILURE,

} from '../types';

const initialState={
fixtures:[]
};

export default function users(state=initialState,action){
    switch(action.type){
        case START_GET_FIXTURES:
            return{
                ...state
            } 
        case GET_FIXTURES_SUCCESS:
            return{
                ...state,
                fixtures:action.payload,
                error:false,
            }
        case GET_FIXTURES_FAILURE:
            return{
                ...state,
                fixtures:[],
                error:true,
            }    
        default:
            return state;
    }
}

