import { Task } from "../../models/task_model";
import style from './delete.module.css'
import Button from "../button/button";
import { ButtomTypes } from "../../enums/style_enums";

interface deleteTaskProp{
    task:Task;
    deleteAction: (task:Task) => void;
    close: () => void;
}

function DeleteTask({task, deleteAction,close}:deleteTaskProp){

    const handleCancel = () => {
        close()
    }

    const handleDelete = async() => {
        
        deleteAction(task)

        close()
    }

    return <div className={style.delete_confirm}>

        <h3 className={style.title}>Exclusão de Tarefa</h3>

        <p>Você está prestes a excluir a tarefa {task.title} você tem certeza disso ?</p>

        <div className={style.buttons}>

            <Button text="Cancelar" action={handleCancel} type={ButtomTypes.small}></Button>

            <Button text="Excluir" action={handleDelete} type={ButtomTypes.small}></Button>

        </div>

    </div>


}

export default DeleteTask