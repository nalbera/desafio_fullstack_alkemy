import React, {useEffect, useState} from 'react';
import './currentbalance.css';

export const CurrentBalance = () => {
    
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        fetch('http://localhost:3001/current-balance')
            .then(response => response.json())
            .then(data => setCurrent(data.total));
    },[current]);

    return ( 
        <div className='current-title'> 
            <span>Current Balance: </span><span className='price'>$ { current } </span>
        </div>
     );
}
 