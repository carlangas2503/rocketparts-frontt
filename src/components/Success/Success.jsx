import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { quitarStock,limpiarComprados,limpiarCarrito } from "../../redux/actions";
import { Link } from "react-router-dom";
import axios from 'axios'
import { URL } from "../../constantes";
import style from './Success.module.css'
import { useAuth0 } from "@auth0/auth0-react";
import Redirect from "../Redirect/Redirect";

export default function Success(params) {

    const {user, isAuthenticated } = useAuth0();

    const dispatch = useDispatch()
    const porComprar = useSelector(state=>state.comprados)
    useEffect(()=>{
        porComprar?.map((ele)=>{
            dispatch(quitarStock(ele))
        })
        dispatch(limpiarComprados())
        dispatch(limpiarCarrito())
        const ayu = async()=>{
            if(isAuthenticated){
                const res = await axios(`${URL}success`,{
                    user
                })
                return res.data
            }

        }
        ayu()
    },[dispatch])

    if(isAuthenticated){

        return(
            <div className={style.container}>
            <h1 className={style.cuerpo}>GRACIAS POR SU COMPRA</h1>
            <br />
            <Link to='/Tienda'><button className={style.butonInterno}>Volver a comprar con nosostros!!</button></Link>
        </div>
    )
    } else {
        return <Redirect/>
    }
    
}