import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useAuth0 } from "@auth0/auth0-react";
import { usuarioID } from "../../redux/actions";
import Redirect from "../../components/Redirect/Redirect";

export default function Profile() {

    const dispatch = useDispatch();
    const usuario = useSelector((state) => state.usuarioDetail)
    const { user, isAuthenticated } = useAuth0();
    
    console.log(user);

    if(isAuthenticated){
        return (
            <div class='text-zinc-100 w-full h-screen grid-cols-1 justify-center items-center'>
                <div class='w-96 h-96 m-auto bg-zinc-800 drop-shadow-lg  items-center justify-center flex flex-col rounded-3xl gap-4 text-lg'>
                    <img class='w-48 h-48 rounded-full border-4 border-violet-600' src={user.picture} alt='' ></img>
                    <p>Nickname: {user.nickname} </p>
                    <p>Nombre: {user.name} </p>
                    <p>Correo: {user.email} </p>
                    </div>
            </div>
        )
    } else {
        return <Redirect/>
    }
}