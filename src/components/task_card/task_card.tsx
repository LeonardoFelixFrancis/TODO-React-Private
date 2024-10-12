import { Task } from "../../models/task_model";
import style from './task_card.module.css'
import Input from "../input/input";
import { useState } from "react";
import { ChangeEvent } from "react";
import Button from "../button/button";
import { ButtomTypes } from "../../enums/style_enums";

interface TaskCardProp{
    task:Task;
    onCancelEvent: (task:Task) => void
}

function TaskCard({task, onCancelEvent}:TaskCardProp){

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

        onCancelEvent(taskToDelete)
    }

    return <div className={style.task_card}>

        <h3 className={style.title}>{task_title}</h3>

        <Input label="" external_value={task_title} onChange={handleTitleChange}></Input>

        <textarea name="description" className={style.description} value={task_description} onChange={handleDescriptionChange}></textarea>

        <div className="buttons">

            <Button type={ButtomTypes.small} text="Excluir" action={handleDelete}></Button>

            <Button type={ButtomTypes.small} text="Excluir"></Button>

        </div>

    </div>

}

export default TaskCard