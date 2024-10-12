import style from './task_line.module.css'

interface taskLine{
    title:string;
    openTaskFunc: () => null
}

function TaskLine({title, openTaskFunc}:taskLine){


    return <div className={style.task}>

        <h4 className={style.title}>{title}</h4>

        <img className={style.open_task} src="././assets/right_arrow.svg" alt="" onClick={openTaskFunc}/>

    </div>

}

export default TaskLine