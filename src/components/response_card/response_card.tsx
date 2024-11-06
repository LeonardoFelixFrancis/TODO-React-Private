
import style from './response_card.module.css'
import { useEffect, useRef } from 'react'

interface ResponseProps{
    message:string,
    status:number,
    dismis: (value:null) => void;
}

function ResponseCard({message, status, dismis}:ResponseProps){

    const timeout = useRef<NodeJS.Timeout>()

    useEffect(() => {
        
        if (timeout.current){
            clearTimeout(timeout.current)
        }

        timeout.current = setTimeout(() => {
            dismis(null);
        }, 5000);
        
    }, [message]);



    return <div className={status != 400 ?`${style.response}` : `${style.error_response}`}>
        <p>{message}</p>
    </div>

}

export default ResponseCard