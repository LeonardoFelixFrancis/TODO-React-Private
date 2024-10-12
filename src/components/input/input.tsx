import { useState } from "react";
import { ChangeEvent } from "react";
import styles from './input.module.css'

interface InputProps{
    label:string|null;
    external_value:string;
    type:string;
    onChange: (value: string) => void;
}

function Input({label, external_value, type, onChange }:InputProps){

    const [internal_value, setValue] = useState(external_value)

    const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
        const input_value = event.target.value

        if (input_value != null){
            setValue(input_value);
            onChange(input_value)
        }
    }

    let label_el = <label className={styles.label} htmlFor="">{label}</label>

    if (label == null){
        label_el = <></>
    }

    return <div className={styles.input_wrapper}>
        
        {label_el}
        <input className={styles.input} id="input" value={internal_value} onChange={handleChange} type={type}></input>
    </div>

}

export default Input