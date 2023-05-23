import React, { useState, useEffect } from 'react';
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { deleteBudget } from '../../services';
import { NavBar } from '../navBar/NavBar';
import swal from 'sweetalert2';
import './liststatus.css';

export const ListStatus = () => {
    
    const {idStatus} = useParams();
    
    let status= '';
    if(idStatus==='1'){
        status='Income';
    }else{
        status='Bill';
    }

    const history = useNavigate();
    const [state, setState] = useState([]);

    useEffect(() => {
        const url = `http://localhost:3001/list-status?status=${idStatus}`;
        fetch(url).then(response => response.json()).then(json => setState(json));
        const menu = document.querySelector('.burguer-container');
        menu.style.display = 'none';
    },[idStatus]);
    const handleDelete = (id) => {
        swal.fire({
            width: "30%",
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this record!",
            icon: "warning",
            showDenyButton: true,
            confirmButtonText: 'Confirm',
            denyButtonText: `Don't deleted`,
            dangerMode: true,
            position: 'top-start'
          })
          .then((result) => {
            if (result.isConfirmed) {
              deleteBudget(id); 
              swal.fire({
                title: "The record has been deleted!",
                icon: "success",
                width: "30%",
                position: 'top-start'
              });
              history('/');
            } else {
              swal.fire({
                title: "Removal canceled",
                width: "30%",
                position: 'top-start'
              });
            }
          });
    }

    return ( 
        <>
            <NavBar />
            <h3 className='title-status'>List by {status}</h3>
            <div id='table-container'>
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Description</th>
                            <th>Amount</th>
                            <th>Modify</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                                state && state?.map(elem => {
                                    return(
                                        <tr key={elem.id}>
                                            <td>{elem.date}</td>
                                            <td>{elem.description}</td>
                                            <td>{elem.amount}</td>
                                            <Link to={`/modify-budget?id=${elem.id}&date=${elem.date}&description=${elem.description}&amount=${elem.amount}`}>
                                                <td><button><FaEdit /></button></td>
                                            </Link>
                                            <td><button onClick={() => handleDelete(elem.id)}><FaTrashAlt /></button></td>
                                        </tr>
                                    )
                                })
                            }
                    </tbody>
                </table>
            </div>
            <div className='table-container-mobile'>
                <table>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Amount</th>
                            <th>Modify</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody className='tableBody'>
                            {
                                state && state?.map(elem => {
                                    return(
                                        <tr key={elem.id}>
                                            <td>{elem.description}</td>
                                            <td>{elem.amount}</td>
                                            <Link to={`/modify-budget?id=${elem.id}&date=${elem.date}&description=${elem.description}&amount=${elem.amount}`}>
                                                <td><button><FaEdit /></button></td>
                                            </Link>
                                            <td><button onClick={() => handleDelete(elem.id)}><FaTrashAlt /></button></td>
                                        </tr>
                                    )
                                })
                            }
                    </tbody>
                </table>
            </div>
        </>
     );
}
 



