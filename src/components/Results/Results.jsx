import style from './Results.module.css'
import { useDispatch, useSelector} from 'react-redux'
import { addCarrito, removeCarrito} from '../../redux/actions';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Results ({ver}){
    const dispatch = useDispatch();
    const ayuCarrito = useSelector(state=>state.carritoCompra)

    const añadir =(ele)=>{
        return dispatch(addCarrito(ele))
    }
    const quitar = (id) =>{
        return dispatch(removeCarrito(id))
    }

    function backgroundImageStyle(img){
        const backgroundImageObj = {
            backgroundImage: `url(${img})`
        }
        return backgroundImageObj
    };

    return(
        <div class='flex flex-row flex-wrap gap-5 mb-10 mx-14'>
            {ver?.map(ele =>{
                return(
    
                    <div class="relative flex w-96 h-96 mt-14 flex-col rounded-xl bg-[#6b35e8] bg-clip-border text-[#fafafa] shadow-md">
                    <div class="relative mx-4 -mt-8 h-80 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600 bg-cover bg-center" style={backgroundImageStyle(ele.fotoprinc)}>
                        
                    </div>
                    <div class="p-6">
                        <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {ele.nombreproducto}
                        </h5>
                        <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                        ${ele.precioproducto} 
                        </p>
                    </div>
                    <div class="p-6 pt-0 flex flex-row">
                        <Link to={`/Detalle/${ele.id}`}>
                        <button data-ripple-light="true" type="button" class="select-none rounded-lg bg-[#fafafa] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-[#050505] shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                        Ver más
                        </button>
                        </Link>
                        
                        {ele.disponibproducto?<div class='ml-10'>
                                 {!ayuCarrito.find(elemento=>Number(ele.id) === elemento.id)?
                                 <button onClick={()=>añadir(ele)} class="select-none rounded-lg bg-[#fafafa] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-[#050505] shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Añadir a carrito</button>:
                                 <button onClick={()=>quitar(Number(ele.id))} class="select-none rounded-lg bg-[#fafafa] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-[#050505] shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Quitar de carrito</button>}
                             </div>:null}
                    </div>
                </div>
                )
            })}
        </div>
    )
}