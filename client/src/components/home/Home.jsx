import React, { useEffect } from "react";
import {CurrentBalance} from '../currentBalance/CurrentBalance';
import { LastTen } from '../lastten/LastTen';
import { NavBar } from "../navBar/NavBar";
export const Home = () => {
    useEffect(() => {
        const menu = document.querySelector('.burguer-container');
        menu.style.display = 'none';
    }, []);

    return(
        <>
            <NavBar />
            <CurrentBalance />
            <LastTen />
        </>
    )
}