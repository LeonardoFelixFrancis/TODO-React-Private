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
    onSubmitEvent: () => void;
}

function TaskCard({task, onDeleteEvent, onSubmitEvent}:TaskCardProp){

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

    const handleCancelOrDelete = () => {

        if (task.id != null){
            const taskToDelete:Task = {
                title: task_title,
                description: task_description,
                id: task.id
            }

            onDeleteEvent(taskToDelete)
        }else{
            onSubmitEvent()
        }

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

        onSubmitEvent()
    }

    let secondaryActionText = ''

    if (task.id != null){
        secondaryActionText = 'Excluir'
    }else{
        secondaryActionText = 'Cancelar'
    }

    return <div className={style.task_card}>

        <h3 className={style.title}>{task_title ? task_title != '' : 'Título da Tarefa'}</h3>

        <Input label="Título" external_value={task_title} onChange={handleTitleChange} type="text" ></Input>

        <textarea name="description" className={style.description} value={task_description} onChange={handleDescriptionChange}></textarea>

        <div className="buttons">

            <Button type={ButtomTypes.small} text={secondaryActionText} action={handleCancelOrDelete}></Button>

            <Button type={ButtomTypes.small} text="Salvar" action={handleSubmit}></Button>

        </div>

    </div>

}

export default TaskCard