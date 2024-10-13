
import style from './menu.module.css'
import { Link, useNavigate } from 'react-router-dom'
import right_arrow from '../../assets/right_arrow.svg'
import exit from '../../assets/exit.svg';

function Menu(){

    const navigate = useNavigate()

    const handleExit = () => {
        navigate('/')
    }

    return <div className={style.menu}>

        <Link className='link' to={'/todo'}>
                <div className={style.menu_line}>
                    <img className={style.todo_img} src={right_arrow} alt="" />

                    <p>
                        Visualizar To-do List
                    </p>

            </div>
        </Link>

        <div className={style.exit_wrapper} onClick={handleExit}>
            <img className={style.exit} src={exit} alt="" />

            <p>
                        Sair
            </p>

        </div>


    </div>

}

export default Menu