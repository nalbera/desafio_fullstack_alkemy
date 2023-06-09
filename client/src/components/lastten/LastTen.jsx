import React, {useEffect, useState} from 'react';
import './lastten.css';

export const LastTen = () => {

    const [state, setState] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/last-ten')
            .then(response => response.json())
            .then(data => setState(data.data));
    },[setState, state.data]);
    
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
 
