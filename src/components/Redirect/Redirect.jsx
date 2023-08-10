import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function Redirect() {

    const { loginWithRedirect } = useAuth0();

    return(
        <div class="flex items-center justify-start flex-col bg-black w-full h-screen">
            <div class='justify-center'>

                <p class='text-zinc-100 flex justify-center text-6xl'>No tienes acceso a esta página, por favor inicia sesión.</p>
                <div class='flex justify-center mt-10'>
                    <button class="select-none rounded-lg bg-violet-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-[#fafafa] shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" onClick={loginWithRedirect} >Iniciar Sesión</button>
                </div>
            </div>
        </div>
    )
}