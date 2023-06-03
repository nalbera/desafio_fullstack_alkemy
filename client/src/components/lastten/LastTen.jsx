import React, {useEffect, useState} from 'react';
import './lastten.css';

export const LastTen = () => {

    const [state, setState] = useState([]);
    const url = 'http://localhost:3001/last-ten';
    const token = sessionStorage.getItem('token');

    useEffect(() => {
        fetch(url,{
            method: 'GET',
            headers:{
                authorization: token
            }
        })
            .then(response => response.json())
            .then(data => setState(data.data));
    },[setState, state.data,token]);
    
    return ( 
        <>
            <div id='table-container'>
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Description</th>
                            <th>Amount</th>
                            <th>Operation Type</th>
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
                                            <td>{elem.typeDescription}</td>
                                        </tr>
                                    )
                                })
                            }
                    </tbody>
                </table>
            </div>
            <div className= 'table-container-mobile'>
                <table>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                                state && state?.map(elem => {
                                    return(
                                        <tr key={elem.id}>
                                            <td>{elem.description}</td>
                                            <td>{elem.amount}</td>
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
 
