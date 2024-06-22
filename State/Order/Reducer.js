import { GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS } from "../Cart/Action";
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS } from "./ActionType";

const initialState ={
    orders:[],
    order:null,
    error:null,
    loading:false
}

export const orderReducer = (state = initialState ,action)=>
{
    switch (action.type) {
        case CREATE_ORDER_REQUEST:
            return{...state , loading:true , error:null}
            
        case CREATE_ORDER_SUCCESS:
            return{...state , success:true,loading:false,order:action.payload}

        case CREATE_ORDER_FAILURE:
            return{...state ,loading:false, error:action.payload}

        case GET_CART_REQUEST:
            return{...state,loading:true,error:null}
            
        case GET_CART_SUCCESS:
            return{...state,order:action.payload, loading:false,error:null}  
            
        case GET_CART_FAILURE:
            return{...state,loading:false,error:action.payload}    
        default:
            break;
    }
}