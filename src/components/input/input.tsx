import { useState } from "react";
import { ChangeEvent } from "react";
import styles from './input.module.css'

interface InputProps{
    label:string;
}

function Input({label}:InputProps){

    const [value, setValue] = useState('')

    const handleChange = (event:ChangeEvent) => {
        const input_value:string|null = event.target.nodeValue

        if (input_value != null){
            setValue(input_value);
        }
    }

    return <div className={styles.input_wrapper}>
        <label className={styles.label} htmlFor="">{label}</label>
        <input className={styles.input} id="input" value={value} onChange={handleChange} type="text"></input>
    </div>

}

export default Input