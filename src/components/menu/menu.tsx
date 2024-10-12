
import style from './menu.module.css'
import { Link } from 'react-router-dom'

function Menu(){

    return <div className={style.menu}>

        <Link to={'/todo'}>
                <div className={style.menu_line}>
                    <img className={style.todo_img} src="././assets/todo_img.svg" alt="" />

                    <p>
                        Visualizar To-do List
                    </p>

            </div>
        </Link>

    </div>

}

export default Menu