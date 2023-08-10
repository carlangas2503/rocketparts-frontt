import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useAuth0 } from "@auth0/auth0-react";
import { usuarioID } from "../../redux/actions";

export default function Profile() {
    const { user, isAuthenticated } = useAuth0();

    useEffect(() => {
        if (isAuthenticated) {
            const userData = {
                name: user.name,
                nickname: user.nickname,
                email: user.email,
                picture: user.picture,
                sub: user.sub,
            }
        }
    })


    return (
        <div class='text-zinc-100'>
        {/* <img src={user.picture} alt='' ></img> */}
        <h1>{user.name} </h1>
        <h2>{user.nickname} </h2>
        </div>
    )
}