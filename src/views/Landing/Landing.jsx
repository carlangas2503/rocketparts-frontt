import React from "react";
import { Link } from 'react-router-dom'
import Navbar from "../../components/Navbar/Navbar";

export default function Landing (){
    return(
        <div class="flex w-full h-screen bg-black flex-wrap">
            <div class='container mx-auto w-1/2 h-1/2 flex flex-row flex-wrap justify-center items-center  text-zinc-100'>
                <h1 class='text-7xl ml-10 font-bold'>
                <span class='translate-y-0  mr-1 inline-block transition-opacity duration-500 ease-linear'>Sueña.</span>
                <span class='translate-y-0  mr-1 inline-block transition-opacity duration-500 ease-linear'>Arma.</span>
                <br/>
                <span class='translate-y-0  mr-1 inline-block transition-opacity duration-500 ease-linear'>Compra.</span>
                <span class='translate-y-0  mr-1 inline-block transition-opacity duration-500 ease-linear'>Disfruta.</span>
                <br/>
                <span class='translate-y-0  mr-1 inline-block transition-opacity duration-500 ease-linear'>Repite.</span>
                <br/>
                <Link  to="/Tienda" >
                    <button class='mt-10 text-3xl border-2 rounded-2xl w-72 h-12 bg-violet-600 border-violet-600 hover:bg-violet-800 hover:border-violet-600'>Comencemos...</button>
                </Link>
                </h1>
            </div>
            <div class='w-1/2 h-1/2 flex flex-row justify-center items-center'>
                <img class='transition-opacity duration-100 ease-in ' src='https://res.cloudinary.com/dvlusccyu/image/upload/v1690749228/img_qatxpx.png' ></img>
            </div>
            <div class='mt-1'>
                
            </div>
                
        </div>
    )
}