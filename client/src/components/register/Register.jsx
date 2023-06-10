import React from 'react';
import { NavBar } from '../navBar/NavBar';

export const Register = () => {
    return (
        <>
            <NavBar />
            <form /*onSubmit={handleSubmit}*/>
                        <p>Register</p>
                        <p htmlFor="">Fisrt Name:</p>
                        <input type="text" name="firstName" id="field" />
                        <div className='msgError'></div>
                        <p htmlFor="">Last Name:</p>
                        <input type="text" name="lastName" id="field" />
                        <p htmlFor="">User Name:</p>
                        <input type="text" name="usertName" id="field" />
                        <p>(*)The data is required</p>
                        <p>
                            <button className='btn btn-color' type='submit'>Register</button>
                        </p>
            </form>
        </>
    );
}

