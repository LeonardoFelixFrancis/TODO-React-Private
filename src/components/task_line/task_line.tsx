import style from './task_line.module.css'
import { Task } from '../../models/task_model';
import right_arrow from '../../assets/right_arrow.svg'


interface taskLine{
    task:Task;
    openTaskFunc: (task:Task) => void
}

function TaskLine({task, openTaskFunc}:taskLine){

    const handleOpen = () => {
        openTaskFunc(task)
    }

    return <div className={style.task}>

        <h4 className={style.title}>{task.title}</h4>

        <img className={style.open_task} src={right_arrow} alt="" onClick={handleOpen}/>

    </div>

}

export default TaskLine