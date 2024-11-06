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
    onChange: (value: string) => void;
}

function Input({label, external_value, external_error, type, is_text_area, onChange }:InputProps){

    const [internal_value, setValue] = useState(external_value)

    const [error, setError] = useState<string|null>(external_error)

    useEffect(() => {
        setError(external_error)
        console.log(external_error)
        // Perform actions when `count` changes
      }, [external_error]); 

    const handleChange = (event:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {

        const input_value = event.target.value

        setValue(input_value);
        onChange(input_value);
        
    }


    return <div className={styles.input_wrapper}>
        
        {label != null ? <label className={styles.label} htmlFor="">{label}</label> : <></>}
        
        <div className={styles.input_error_wrapper}>
            {is_text_area ? <textarea className={error != null ? `${styles.text_area} ${styles.bottom_less_radius}` : styles.text_area} value={internal_value} onChange={handleChange}></textarea>
                          : <input className={error == null ? "border-2 border-gray-300 text-gray-900 text-sm rounded-lg w-full h-10 p-1 focus:outline-none focus:border-blue-500" :
                                                              "border-2 border-red-700 border- text-gray-900 text-sm rounded-lg w-full h-10 p-1 focus:outline-none"
                          } id="input" onChange={handleChange} type={type}></input>}
            
            {error != null ? <div className="bg-none mt-1">
                                <p className="text-red-500">{error}</p>
                             </div> : <></>}
        </div>

    </div>

}

export default Input