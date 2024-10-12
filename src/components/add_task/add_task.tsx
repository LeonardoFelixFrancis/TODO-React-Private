import { Task } from '../../models/task_model';
import style from './add_task.module.css'

interface AddTaskProp{

    addAction: (task: Task) => void;


}

function AddTask({addAction}: AddTaskProp){

    const handleAdd = () => {
        addAction({
            title:"",
            description:"",
            id:null
        })
    }

    return <div className={style.add_task}>

        <img className={style.add_icon} src="././assets/add.svg" alt="" onClick={handleAdd}/>

        <p className={style.text}></p>

    </div>

}

export default AddTask