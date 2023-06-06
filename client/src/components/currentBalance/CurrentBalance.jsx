import React, {useEffect, useState, useContext} from 'react';
import { AuthContext } from '../../context/AuthContext';

import './currentbalance.css';

export const CurrentBalance = () => {
    
    const [current, setCurrent] = useState(0);
    const url = 'http://localhost:3001/current-balance';
    
    const {token} = useContext(AuthContext);

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
 