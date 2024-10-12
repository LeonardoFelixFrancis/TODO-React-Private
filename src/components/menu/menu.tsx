import style from './menu.module.css'

function Menu(){

    return <div className={style.menu}>

        <div className={style.menu_line}>
            <img className={style.todo_img} src="././assets/todo_img.svg" alt="" />

            <p>
                Visualizar To-do List
            </p>

        </div>

    </div>

}

export default Menu