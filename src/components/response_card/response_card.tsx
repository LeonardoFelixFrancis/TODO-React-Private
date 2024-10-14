
import style from './response_card.module.css'
import { useEffect, useState } from 'react'

interface ResponseProps{
    message:string,
    status:number,
    dismis: (value:null) => void;
}

function ResponseCard({message, status, dismis}:ResponseProps){

    const [currentInterval, setCurrentInterval] = useState<number | null>(null);

    useEffect(() => {
       
        const interval = setInterval(() => {
            
            dismis(null);
        }, 5000);
        
        setCurrentInterval(interval);

        return () => {
            if (currentInterval) {
                clearInterval(currentInterval);
            }
        };
    }, []);



    return <div className={status != 400 ?`${style.response}` : `${style.error_response}`}>
        <p>{message}</p>
    </div>

}

export default ResponseCard