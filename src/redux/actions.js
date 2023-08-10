import axios from "axios"
import {URL} from '../constantes'
export const ADD_CARRITO = 'ADD_CARRITO'
export const REMOVE_CARRITO = 'REMOVE_CARRITO'
export const BUSCAR_PERSONAJE_ID = 'BUSCAR_PERSONAJE_ID'
export const PRECIO_TOTAL = 'PRECIO_TOTAL'
export const SUMAR_CARRITO = 'SUMAR_CARRITO'
export const RESTAR_CARRITO = 'RESTAR_CARRITO'
export const PRODUCTOS_A_COMPRAR = 'PRODUCTOS_A_COMPRAR'
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS"
export const PRODUCTOS_RETIRADOS = 'PRODUCTOS_RETIRADOS'
export const COMPRA_EXITOSA = 'COMPRA_EXITOSA'
export const QUITAR_STOCK = 'QUITAR_STOCK'
export const LIMPIAR_COMPRADOS = 'LIMPIAR_COMPRADOS'

export const buscarId = (id)=>{
    return async function(dispatch){
        try {
        const resApi = await axios(`${URL}products/${id}`)
         if(resApi.data){
         return dispatch({
                type:BUSCAR_PERSONAJE_ID,
                payload:resApi.data
            })
        }
        } catch (error) {
            console.log(error);
        }  
    }
}
export const addCarrito = (char) =>{
    const response = {...char}

    return {
        type:ADD_CARRITO,
        payload:response,
    }
}
export const precioInicial = (carrito)=>{
    let total = 0
    carrito.map(ele=>{
        total +=ele.precioproducto
    })
    return {
        type:PRECIO_TOTAL,
        payload:total
    }
}
export const productosAComprar = (id)=>{
    return{
        type:PRODUCTOS_A_COMPRAR,
        payload:id
    }
}
export const productosRetirados = (id)=>{
    return{
        type:PRODUCTOS_RETIRADOS,
        payload:id
    }
}
export const sumarCarrito = (valor)=>{
    return{
        type:SUMAR_CARRITO,
        payload:valor
    }
}
export const restarCarrito = (valor)=>{
    return{
        type:RESTAR_CARRITO,
        payload:valor
    }
}
export const removeCarrito = (id) =>{
    return {
        type:REMOVE_CARRITO,
        payload:id
    }
}
export function usuarioID(sub){
    return async function (dispatch) {
        const json = await axios(`${URL}users/${sub}`)
        return dispatch({
            type: "USUARIO_ID",
            payload: json.data
        })
    }
}
export const getProductos = () =>{
    return async function(dispatch){
        try {
            const json = await axios.get(`${URL}products`)
            return dispatch({
                type: GET_ALL_PRODUCTS,
                payload: json.data.productos
            })
        } catch (error) {
            console.log(error);
        }
    }
}
export const limpiarCarrito = ()=>{
    return{
        type:COMPRA_EXITOSA
    }
}
export const quitarStock = (id)=>{
    const res = axios.put(`${URL}restar/${id}`)
    return{
        type:QUITAR_STOCK,
        payload:res.data
    }
}
export const limpiarComprados =()=>{
    return{
        type:LIMPIAR_COMPRADOS
    }
}