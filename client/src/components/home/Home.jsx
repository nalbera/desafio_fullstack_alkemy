import React, { useEffect, useContext } from "react";
import {CurrentBalance} from '../currentBalance/CurrentBalance';
import { LastTen } from '../lastten/LastTen';
import { NavBar } from "../navBar/NavBar";
import {Login} from '../login/Login';
import { AuthContext } from "../../context/AuthContext";

export const Home = () => {
    useEffect(() => {
        const menu = document.querySelector('.burguer-container');
        menu.style.display = 'none';
    }, []);
    const {token} = useContext(AuthContext);

    return(
        <>
            <NavBar /> 
            {
                !token ? (
                    <Login />
                ) : (
                    <>
                        <CurrentBalance />
                        <LastTen />
                    </>

                )
            }
        </>
    )
}