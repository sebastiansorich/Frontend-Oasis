import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Card({ title, icon, url, color, color2}) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                setCount(response.data.length);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

        // Cleanup function to cancel any pending requests if the component unmounts
        return () => {
            // Cancel the request
        };
    }, [url]);

    return (
        <div className={`${color} h-20 m-0 p-0 flex items-center text-white shadow-2xl`}>
            <div className={`${color2}  flex items-center justify-center`}>
                <i className={`fas ${icon} p-2`} style={{ fontSize: '60px' }}></i>
            </div>
            <div className="p-1 m-5  justify-center">
                <h3>{title}</h3>
                <p className='text-4xl'>{`${count}`}</p>
            </div>
        </div>
    );
}

export default Card;
