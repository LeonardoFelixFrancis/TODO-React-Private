import style from './button.module.css'
import { ButtomTypes } from '../../enums/style_enums';

interface ButtonProps{
    text:string;
    type:ButtomTypes;
    action: () => void
}

function Button({text, type, action}:ButtonProps){

    let button_style;

    switch (type){
        case 'sm':
            button_style = style.sm_button;
            break;
        case 'md':
            button_style = style.md_button;
            break;
        case 'lg':
            button_style = style.lg_button;
            break;
        case 'xt':
            button_style = style.xt_button;
            break;
    }

    return <button className={`${button_style} ${style.button}`} onClick={action}>{text}</button>

}

export default Button