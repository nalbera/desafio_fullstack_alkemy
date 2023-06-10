import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services';
import swal from 'sweetalert2';
import { AuthContext } from '../../context/AuthContext';

export const Login = () => {

    const navigate = useNavigate();
    const { setToken } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const userName = e.target.userName.value;
        const password = e.target.password.value;
        
        const response = await login(userName,password);
        
        if(response.status === 'OK'){
            const token = response.data.token;
            
            setToken(token);
            
            swal.fire({
                title: response.message,
                width: "30%",
                position: 'top-start',
                icon: 'success',
            });

            navigate('/');
        }

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                    <p>Login</p>
                    <p htmlFor="">User*:</p>
                    <input type="text" name="userName" id="field" />
                    <div className='msgError'></div>
                    <p htmlFor="">Password*:</p>
                    <input type="password" name="password" id="field" />
                    <p>(*)The data is required</p>
                    <p>
                        <button className='btn btn-color' type='submit'>Login</button>
                    </p>
            </form>
        </>
    );
}


