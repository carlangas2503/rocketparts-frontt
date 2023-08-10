import { useState } from "react"
import style from '../Carrito/Carrito.module.css'
import { useDispatch,useSelector } from "react-redux"
import {restarCarrito, sumarCarrito, productosAComprar, productosRetirados,removeCarrito } from "../../redux/actions"
import { Link } from "react-router-dom"

export default function CardsCarrito({ele,preferenceId}) {
    const [cont,setCont] = useState(1)
    const dispatch = useDispatch()
    const sum = ()=>{
        if(cont+1 > ele.disponibproducto)return
        setCont(cont +1)
        dispatch(sumarCarrito(ele.precioproducto))
        dispatch(productosAComprar(ele.id))
    }
    const res = ()=>{
        if(cont-1<1)return
        setCont(cont - 1)
        dispatch(restarCarrito(ele.precioproducto))
        dispatch(productosRetirados(ele.id))
    }
    const quitar = (id)=>{
        window.location.reload(true);
        dispatch(removeCarrito(Number(id)))
    }
    return(
        <div className={style.card} key={ele.id}>
            <img className={style.imagen} src={ele.fotoprinc} alt="" />
            <div className={style.cuerpo}>
            <h3 >{ele.nombreproducto}</h3>
            <br />
            <h2 className={style.tag}>{ele.precioproducto}</h2>
            <div className={style.contAum}>
                {!preferenceId?<button className={style.botonesAyD} onClick={res}>-</button>:null}{cont}{!preferenceId?<button className={style.botonesAyD} onClick={sum}>+</button>:null}
            </div>  
                <button className={style.butonInterno} onClick={()=>quitar(ele.id)}>quitar carrito</button>
            </div>

        </div>
    )
}