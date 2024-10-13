import { useState } from "react";
import { ChangeEvent } from "react";
import styles from './input.module.css'
import { useEffect } from "react";


interface InputProps{
    label:string|null;
    external_value:string;
    external_error:string|null;
    type:string;
    is_text_area:boolean;
    clearExternalError: (value:null) => void,
    validationFunction: (value:string) => string|null;
    onChange: (value: string) => void;
}

function Input({label, external_value, external_error, type, is_text_area,clearExternalError,validationFunction, onChange }:InputProps){

    const [internal_value, setValue] = useState(external_value)

    const [error, setError] = useState<string|null>(external_error)

    useEffect(() => {
        setError(external_error)
        console.log(external_error)
        // Perform actions when `count` changes
      }, [external_error]); 

    const handleChange = (event:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
        const input_value = event.target.value

        const error_msg = validationFunction(input_value);

        if (error_msg != null){
            setError(error_msg)
        }else{
            setError(null)
        }

        if (input_value != null){
            setValue(input_value);
            onChange(input_value);
            clearExternalError(null);
        }
        
    }



    let label_el = <label className={styles.label} htmlFor="">{label}</label>

    if (label == null){
        label_el = <></>
    }

    let input = <></>

    if (!is_text_area){
        input = <input className={error != null ? `${styles.input} ${styles.bottom_less_radius}` : styles.input} id="input" value={internal_value} onChange={handleChange} type={type}></input>
    }else{
        input = <textarea className={error != null ? `${styles.text_area} ${styles.bottom_less_radius}` : styles.text_area} value={internal_value} onChange={handleChange}></textarea>
    }

    let error_ellement = <></>

    if (error != null){ 
        error_ellement = <div className={styles.error}>
                            <p>{error}</p>
                        </div>
    }

    return <div className={styles.input_wrapper}>
        
        {label_el}
        
        <div className={styles.input_error_wrapper}>
            {input}
            {error_ellement}
        </div>

    </div>

}

export default Input