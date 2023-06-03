import React, {useEffect, useState} from 'react';
import './currentbalance.css';

export const CurrentBalance = () => {
    
    const [current, setCurrent] = useState(0);
    const url = 'http://localhost:3001/current-balance';
    const token = sessionStorage.getItem('token');

    useEffect(() => {
        fetch(url,{
            method: 'GET',
            headers:{
                authorization: token
            }
        })
        .then(response => response.json())
        .then(data => setCurrent(data.total));
    },[current,token]);

    return ( 
        <div className='current-title'> 
            <span>Current Balance: </span><span className='price'>$ { current } </span>
        </div>
     );
}
 