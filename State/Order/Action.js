import axios from "axios";
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_BY_ID_FAILURE, GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS } from "./ActionType"
import { API_BASE_URL, api } from "../../src/Config/apiConfig";

export const createOrder =(reqData)=>async (dispatch)=>{
  
    dispatch({type:CREATE_ORDER_REQUEST});
   
    try{
        const config ={
            headers:{
                "content-Type":"application/json",
                Authorization:`Bearer ${reqData.jwt}`
            }
        };

        const {data} = await axios.post(
            `${API_BASE_URL}/api/orders/`,
            reqData.address,
            config
        );
        if(data.id){
            reqData.navigate({search:`step=38&order_id=${data.id}`})
        }
        console.log("created order - ",data)
        dispatch({
            type:CREATE_ORDER_SUCCESS,
            payload:data,
        })
    }catch(error)
    
    {
        console.log("Catch Error :", error)
        dispatch({
            type:CREATE_ORDER_FAILURE,
            payload:error.message
        })
    }
}


export const getOrderById = (orderId) =>async(dispatch)=>{
    dispatch({type:GET_ORDER_BY_ID_REQUEST});
    try{
        const {data} = await api.get(`api/orders/${orderId}`);
        console.log("order By id :",data)
        dispatch({
            
            type:GET_ORDER_BY_ID_SUCCESS,
            payload:data
        })
    }catch(error)
    {
        console.log("order by id :" ,error)
        dispatch({
            type:GET_ORDER_BY_ID_FAILURE,
            payload:error.message
        })
    }
}