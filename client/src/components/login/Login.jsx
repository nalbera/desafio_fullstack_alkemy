import React from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services';
import swal from 'sweetalert2';

export const Login = () => {

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const userName = e.target.userName.value;
        const password = e.target.password.value;
        
        const response = await login(userName,password);

        if(response.status === 'OK'){
            const token = response.data.token;
            sessionStorage.setItem('token',token);
            swal.fire({
                title: response.message,
                width: "30%",
                position: 'top-start',
                icon: 'success',
            });

            navigate('/home');
        }

    }
    return (
        <form onSubmit={handleSubmit}>
                <p>Login</p>
                <p htmlFor="">User*:</p>
                <input type="text" name="userName" id="field" />
                <div className='msgError'></div>
                <p htmlFor="">Password*:</p>
                <input type="password" name="password" id="field" />
                <p>(*)The data is required</p>
                <p>Or Register</p>
                <p>
                    <button className='btn btn-color' type='submit'>Submit</button>
                </p>
        </form>
    );
}


