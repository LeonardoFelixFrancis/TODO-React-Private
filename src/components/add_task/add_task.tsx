import { Task } from '../../models/task_model';
import style from './add_task.module.css';
import add from '../../assets/add.svg';

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

    return <div className={style.add_task} onClick={handleAdd}>

        <img className={style.add_icon} src={add} alt="" />

        <p className={style.text}>Adicionar nova Tarefa</p>

    </div>

}

export default AddTask