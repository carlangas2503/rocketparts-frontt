import React from "react";
import { Link } from "react-router-dom";
import style from "./Card.module.css"
import { addCarrito,removeCarrito } from "../../redux/actions";
import { useDispatch,useSelector } from "react-redux";



export default function Card({nombre, img, descuento, id, precio, calificacion,dispo,all}){
    const dispatch = useDispatch()
    const carrito = useSelector(state=>state.carritoCompra)
    const añadir =(ele)=>{
        return dispatch(addCarrito(ele))
    }
    const quitar = (id) =>{
        return dispatch(removeCarrito(id))
    }

    const backgroundImageStyle = {
        backgroundImage: `url(${img})`,
      };
    return(
        // <div class='w-96 h-96 text-zinc-100 border-violet-600 border-2 bg-violet-600 rounded-2xl' >
            
        //         <div class='m-5'>
        //         <div class='' key={id}>
        //                 <h3>{nombre}</h3>
        //                 <img className={style.imagenes} src={img} alt="" />
        //                 <h3>{precio}$</h3>
        //                 <h3> {calificacion} </h3>
                        
        //                 {dispo?<div>
        //                 {!carrito.find(elemento=>Number(id) === elemento.id)?
        //                 <button onClick={()=>añadir(all)}>Añadir a carrito</button>:
        //                 <button onClick={()=>quitar(Number(id))}>Quitar de carrito</button>}
        //             </div>:null}
        //                 <Link   to={`/Detalle/${id}`}><button>ver más</button></Link>   
        //             </div>
                    
                    
        //         </div>
            
        // </div>
        <div class="relative flex w-96 h-96 flex-col rounded-xl bg-[#6b35e8] bg-clip-border text-[#fafafa] shadow-md">
            <div class="relative mx-4 -mt-8 h-80 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600 bg-cover bg-center" style={backgroundImageStyle}>
                
            </div>
            <div class="p-6">
                <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {nombre}
                </h5>
                <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                ${precio} 
                </p>
            </div>
            <div class="p-6 pt-0 flex flex-row">
                <Link to={`/Detalle/${id}`}>
                <button data-ripple-light="true" type="button" class="select-none rounded-lg bg-[#fafafa] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-[#050505] shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                Ver más
                </button>
                </Link>
                {dispo?<div class='ml-10'>
                         {!carrito.find(elemento=>Number(id) === elemento.id)?
                         <button onClick={()=>añadir(all)} class="select-none rounded-lg bg-[#fafafa] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-[#050505] shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Añadir a carrito</button>:
                         <button onClick={()=>quitar(Number(id))} class="select-none rounded-lg bg-[#fafafa] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-[#050505] shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Quitar de carrito</button>}
                     </div>:null}
            </div>
        </div>
    )
}