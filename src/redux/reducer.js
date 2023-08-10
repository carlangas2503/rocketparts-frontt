import { 
    GET_ALL_PRODUCTS,
    ADD_CARRITO,
    REMOVE_CARRITO,
    BUSCAR_PERSONAJE_ID,
    PRECIO_TOTAL,
    SUMAR_CARRITO,
    RESTAR_CARRITO,
    PRODUCTOS_A_COMPRAR,
    PRODUCTOS_RETIRADOS,
    COMPRA_EXITOSA,
    QUITAR_STOCK,
    LIMPIAR_COMPRADOS,
 } from "./actions";


const initialState = {
    Productos: [],
    usuarioDetail: [],
    carritoCompra:[],
    detail:{},
    total:0,
    comprados:[]
}

export default function rootReducer(state = initialState, { type, payload }) {
    switch (type) {
        case "USUARIO_ID":
        return {
            ...state,
            usuarioDetail: payload
        };
        case PRECIO_TOTAL:
            return{
                ...state,
                total:payload
            }
        case SUMAR_CARRITO:
            return{
                ...state,
                total:state.total + payload
            }
        case RESTAR_CARRITO:
            return{
                ...state,
                total:state.total - payload
            }
        case GET_ALL_PRODUCTS:
        return {
            ...state,
            Productos: payload,
        };
        case PRODUCTOS_A_COMPRAR:
            return{
                ...state,
                comprados:[...state.comprados,payload]
            }
        case PRODUCTOS_RETIRADOS:
            const ayu = state.comprados
            const index = ayu.indexOf(payload)
            ayu.splice(index,1)
            return{
                ...state,
                comprados:ayu
            }
        case BUSCAR_PERSONAJE_ID:
            return{...state,detail:payload}
        case ADD_CARRITO:
            return {...state,carritoCompra:[...state.carritoCompra,payload]}
        case REMOVE_CARRITO:
            return {
                ...state,
                carritoCompra:state.carritoCompra.filter((ele)=>Number(ele.id) !== Number(payload))
            }
        case QUITAR_STOCK:
            return {
                ...state
            }
        case COMPRA_EXITOSA:
            return {
                ...state,
                carritoCompra:[]
            }
        case LIMPIAR_COMPRADOS:
            return{
                ...state,
                comprados:[]
            }
        default:
            return{...state}
    };

        
}