
import style from './response_card.module.css'
import { useEffect } from 'react'

interface ResponseProps{
    message:string,
    status:number,
    dismis: (value:null) => void;
}

function ResponseCard({message, status, dismis}:ResponseProps){

    
    useEffect(() => {
        setInterval(() => {dismis(null)}, 5000);
    }, [])


    return <div className={status != 400 ?`${style.response}` : `${style.error_response}`}>
        <p>{message}</p>
    </div>

}

export default ResponseCard