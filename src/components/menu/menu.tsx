
import style from './menu.module.css'
import { Link } from 'react-router-dom'
import right_arrow from '../../assets/right_arrow.svg'

function Menu(){

    return <div className={style.menu}>

        <Link className='link' to={'/todo'}>
                <div className={style.menu_line}>
                    <img className={style.todo_img} src={right_arrow} alt="" />

                    <p>
                        Visualizar To-do List
                    </p>

            </div>
        </Link>

    </div>

}

export default Menu