import axios from "axios";
import {  api } from "../../src/Config/apiConfig";
import { FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS } from "./ActionType";

export const findProducts = (reqData) => async (dispatch) => {
    dispatch({type:FIND_PRODUCTS_REQUEST})
    const {
       minPrice,
       maxPrice,
       minDiscount,
       stock,
       sort,
       pageNumber,
       pageSize


    } = reqData
  try {

     const {data} = await api.get(`/api/products?minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`)
  console.log("product data" , data)
      dispatch({type:FIND_PRODUCTS_SUCCESS,payload:data})
    
  } catch (error) {
    dispatch({type:FIND_PRODUCTS_FAILURE,payload:error.message})
  }
};




export const findProductsById = (reqData) => async (dispatch) => {
    dispatch({type:FIND_PRODUCT_BY_ID_REQUEST})
    
    console.log("product",reqData)
  try {

     const {data} =  await api.get(`/api/products/id/${reqData}`)
     console.log("dattaa",data)
      dispatch({type:FIND_PRODUCT_BY_ID_SUCCESS,payload:data})
    
  } catch (error) {
    dispatch({type:FIND_PRODUCT_BY_ID_FAILURE,payload:error.message})
  }
};