import { useEffect, useState } from "react"
import { useSelector,useDispatch } from "react-redux"
import { Link } from 'react-router-dom'
import style from './Carrito.module.css'
import axios from "axios"
import {initMercadoPago,Wallet} from '@mercadopago/sdk-react'
import { precioInicial, restarCarrito, sumarCarrito, productosAComprar, productosRetirados, limpiarComprados, quitarStock, limpiarCarrito, removeCarrito } from "../../redux/actions"
import { URL } from "../../constantes"
import { useAuth0 } from "@auth0/auth0-react";
import CardsCarrito from "../CardsCarrito/CardsCarrito"

const saveInLocalStorage = (carrito) => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

export function Carrito (){

    const { isAuthenticated, loginWithRedirect } = useAuth0();

    const elementos = useSelector(state=>state.carritoCompra)
    const total = useSelector(state=>state.total)
    const porComprar = useSelector(state=>state.comprados)
    const [preferenceId, setPreferenceId] = useState(null)

    //Estado Local para almacenar carrito desde localStorage
    const [carritoLocal, setCarritoLocal] = useState([]);
    
    initMercadoPago('TEST-c400579c-6b28-4f81-b113-f46d83d791dd');
    const dispatch = useDispatch()

    const createPreference = async()=>{
        try {
            const response = await axios.post(`${URL}create-order`,{
                description:'Compra multiples productos',
                price:Number(total),
                quantity:1,
            })
            const {id} = response.data;
            console.log(response.data);
            return id
        } catch (error) {
            console.log(error);
        }
    }
    const handleBuy = async()=>{
        if(isAuthenticated){
            const id = await createPreference();
        if(id){
            setPreferenceId(id)
        }
        } else {
            loginWithRedirect()
        }
        
    }
    useEffect(()=>{
        //Leer carrito del localstorage al montarse
        const carritoGuardado = localStorage.getItem("carrito");
        if(carritoGuardado) {
            setCarritoLocal(JSON.parse(carritoGuardado));
        }

        dispatch(limpiarComprados())
        elementos.map(ele=>{
            dispatch(productosAComprar(ele.id))
        })
        dispatch(precioInicial(elementos))

        //Guardar carrito actualizado en localStorage
        saveInLocalStorage(elementos);
    },[elementos])
    return(
        <div class='text-zinc-100' className={style.allContainer}>
            {elementos.length?
            <div className={style.container}>
                {elementos?.map((ele)=><CardsCarrito ele={ele} preferenceId={preferenceId}/>)}
            </div>:<h1 className={style.carritoVacio}>Vamos, agrega algo a tu carrito!!</h1>}
            <br />
            <br />
            {elementos.length?<div className={style.total}>
                Total:   {total}
            </div>:null}
            <br />
            <br />
            {elementos.length?<div className={style.contPago}>
                {preferenceId?<div><Wallet initialization ={{ preferenceId }}/></div>:<button className={style.butonInterno} onClick={handleBuy}>PAGAR!</button>}
            </div>:null}
            <br />
            <br />
        </div>
    )
}
