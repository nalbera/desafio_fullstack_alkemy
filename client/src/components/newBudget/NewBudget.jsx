import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { postNewBudget } from '../../services';
import { NavBar } from '../navBar/NavBar';
import swal from 'sweetalert2';

export const NewBudget = () => {
    
    const history = useNavigate();

    const [input, setInput] = useState({
        date: '',
        description:'',
        amount: '',
        type: ''
    });

    const handleChange = (evt) => {
        evt.preventDefault();
        setInput({
            ...input,
            [evt.target.name]: evt.target.value
        });
        
    };

    useEffect(() => {
        const menu = document.querySelector('.burguer-container');
        menu.style.display = 'none';
    }, []);

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        if(!input.date || !input.description || !input.amount || !input.type){
            return swal.fire({
                title: "Missing data",
                width: "30%",
                position: 'top-start'
              });
        };
        const rta = await postNewBudget(input);
        
        if(rta.status === 'ERROR'){
             const elem = document.querySelector('.msgError')
             elem.innerHTML = `<p>${rta.errors[0].msg}</p>`
        }else{
            history('/home');
        }
    }

    return ( 
        <>
            <NavBar />
            <form onSubmit={handleSubmit}>
                <p>New Budget</p>
                <p htmlFor="">Date*:</p>
                <input type="text" name="date" id="field" onChange={(e) => handleChange(e)} placeholder='AAAA-MM-DD'/>
                <div className='msgError'></div>
                <p htmlFor="">Description*:</p>
                <input type="text" name="description" id="field" onChange={(e) => handleChange(e)}/>
                <p htmlFor="">Amount*:</p>
                <input type="text" name="amount" id="field" onChange={(e) => handleChange(e)}/>
                <p htmlFor="">Operation Type*:</p>
                <select name="type" id="field" onChange={(e) => handleChange(e)}>
                    <option></option>
                    <option value="1">Income</option>
                    <option value="2">Bills</option>
                </select>
                <p>(*)The data is required</p>
                <p>
                    <button className='btn btn-color' type='submit'>Submit</button>
                </p>
            </form>
        </>
     );
};
 
