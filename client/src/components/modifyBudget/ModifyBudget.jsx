import React, { useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { modifyBudget } from '../../services';
import { NavBar } from '../navBar/NavBar';
import swal from 'sweetalert2';
import { AuthContext } from '../../context/AuthContext';

export const ModifyBudget = () => {
    const history = useNavigate();
    const {search} = useLocation();
    
    const params = new URLSearchParams(search);
    const id = params.get('id');
    const date = params.get('date');
    const description = params.get('description');
    const amount = params.get('amount')
    
    const [state, setState] = useState({
        id: id,
        date: date,
        description: description,
        amount: amount,
    });

    const {token} = useContext(AuthContext);
    
    const handleChange = (evt) => {
        evt.preventDefault();
        setState({
            ...state,
            [evt.target.name]: evt.target.value
        });
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        if(!state.date || !state.description || !state.amount){
            return  swal.fire({
                title: "Missing data",
                width: "30%",
                position: 'top-start'
              });
        };
        await modifyBudget(state.id,state.date,state.description,state.amount,token);
        history('/home');
    }
    return ( 
        <>
            <NavBar />
            <form onSubmit={handleSubmit}>
                <p>Modify Budget</p>
                <p htmlFor="">Date:</p>
                <input type="text" name="date" id="field" onChange={(e) => handleChange(e)} value={state.date} />
                <p htmlFor="">Description:</p>
                <input type="text" name="description" id="field" onChange={(e) => handleChange(e)} value={state.description} />
                <p htmlFor="">Amount:</p>
                <input type="text" name="amount" id="field" onChange={(e) => handleChange(e)} value={state.amount} />
                <p>
                    <button className='btn btn-color' type='submit'>Submit</button>
                </p>
            </form>
        </>
     );
}
