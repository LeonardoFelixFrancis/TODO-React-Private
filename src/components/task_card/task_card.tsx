import { Task } from "../../models/task_model";
import style from './task_card.module.css'
import Input from "../input/input";
import { useState } from "react";
import { ChangeEvent } from "react";
import Button from "../button/button";
import { ButtomTypes } from "../../enums/style_enums";
import { createTask, updateTask } from "../../services/task_service";

interface TaskCardProp{
    task:Task;
    onDeleteEvent: (task:Task) => void;
    onSubmitEvent: (task:Task) => void;
}

function TaskCard({task, onDeleteEvent}:TaskCardProp){

    const [task_title, setTitle] = useState(task.title)
    const [task_description, setDescription] = useState(task.description)

    const handleTitleChange = (value:string) => {
        setTitle(value)
    }

    const handleDescriptionChange = (event:ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = event.target.value;

        if (newValue != null){
            setDescription(newValue)
        }

    }

    const handleDelete = () => {

        const taskToDelete:Task = {
            title: task_title,
            description: task_description,
            id: task.id
        }

        onDeleteEvent(taskToDelete)
    }

    const handleSubmit = async() => {

        const taskToSave:Task = {
            title: task_title,
            description: task_description,
            id: task.id
        }
        
        let response;

        if (taskToSave.id != null){
            response = await updateTask(taskToSave)
        }else{
            response = await createTask(taskToSave)
        }

        console.log(response)
    }

    return <div className={style.task_card}>

        <h3 className={style.title}>{task_title}</h3>

        <Input label="" external_value={task_title} onChange={handleTitleChange} type="text"></Input>

        <textarea name="description" className={style.description} value={task_description} onChange={handleDescriptionChange}></textarea>

        <div className="buttons">

            <Button type={ButtomTypes.small} text="Excluir" action={handleDelete}></Button>

            <Button type={ButtomTypes.small} text="Salvar" action={handleSubmit}></Button>

        </div>

    </div>

}

export default TaskCard