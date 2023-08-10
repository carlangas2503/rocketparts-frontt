import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {Link} from 'react-router-dom'
import axios from 'axios';
import { URL } from "../../constantes";


export default function Navbar (){
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  const [isAuthenticatedNow, setIsAuthenticatedNow] = useState(false);
  console.log(isAuthenticated)

  useEffect(() => {
    if (isAuthenticated) {
      setIsAuthenticatedNow(true);
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (isAuthenticatedNow) {
      const userData = {
        name: user.name,
        nickname: user.nickname,
        email: user.email,
        picture: user.picture,
        sub: user.sub,
        password: user.password,
      };
      
      axios
        .post(`${URL}users`, userData)
        .then(response => {
          console.log("User created in the backend:", response.data);
        })
        .catch(error => {
          console.error("Error creating user:", error);
        });
    }
  }, [isAuthenticatedNow, user]);
  
  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
  };
  const handleLogin = () => {
      loginWithRedirect();
  };

    return (

        <div class="mb-10 h-10">
          <header class="w-full h-16 bg-black fixed">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2 ml-5 mt-3 content-center">
                <Link to="/">
                <button>
                  <p class="no-underline text-violet-800 font-semibold text-2xl">
                    Rocket
                    <span class='text-zinc-100'>Parts</span>
                    </p>
                  
                </button>
                </Link>
              </div>
              <div class="flex items-center gap-8 mr-5 mt-3">
                <div  class="items-center font-semibold text-xl flex gap-6" >
                  <Link to='/Carrito'><button class="relative text-zinc-100 hover:after:bg-zinc-100 hover:after:w-full hover:after:h-[0.7px] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:content:'' transition-all" >🛒</button></Link>
                  <Link to="/Tienda" > <button class="relative text-zinc-100 hover:after:bg-zinc-100 hover:after:w-full hover:after:h-[0.7px] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:content:'' transition-all" >Tienda</button></Link>
                  { isAuthenticated ? <Link to='/CrearProducto' > <button class="relative text-zinc-100 hover:after:bg-zinc-100 hover:after:w-full hover:after:h-[0.7px] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:content:'' transition-all" href="/CrearProducto" >Crear Producto</button></Link> : null}
                  
                </div>
                <div class="items-center font-semibold text-xl flex gap-6 text-zinc-100">
                  { isAuthenticated ? (
                  <>
                  <Link class="relative text-zinc-100 hover:after:bg-zinc-100 hover:after:w-full hover:after:h-[0.7px] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:content:'' transition-all" to='/Perfil'>Perfil</Link>
                  <button class="relative text-zinc-100 hover:after:bg-zinc-100 hover:after:w-full hover:after:h-[0.7px] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:content:'' transition-all" onClick={handleLogout}>Cerrar Sesión</button>
                  </>
                  ) : (
                  <>
                    <button class="relative text-zinc-100 hover:after:bg-zinc-100 hover:after:w-full hover:after:h-[0.7px] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:content:'' transition-all" onClick={handleLogin}>Iniciar Sesión</button>
                  </>
                  )}
                <Link class="relative text-zinc-100 hover:after:bg-zinc-100 hover:after:w-full hover:after:h-[0.7px] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:content:'' transition-all" to='/About'>About</Link>
                </div>
              </div>
            </div>
          </header>
        </div>
    )
}