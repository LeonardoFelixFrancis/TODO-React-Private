import { Task } from "../../models/task_model";
import style from './task_card.module.css'
import Input from "../input/input";
import { useState } from "react";
import Button from "../button/button";
import { ButtomTypes } from "../../enums/style_enums";


interface TaskCardProp{
    task:Task;
    onDeleteEvent: (task:Task) => void;
    onSubmitEvent: (task:Task) => void;
    dismis: () => void
}

function TaskCard({task, onDeleteEvent, onSubmitEvent, dismis}:TaskCardProp){

    const [task_title, setTitle] = useState(task.title)
    const [task_description, setDescription] = useState(task.description)

    const [errorTitle, setErrorTitle] = useState<string|null>(null)
    const [errorDescription, setErrorDescription] = useState<string|null>(null)

    const handleTitleChange = (value:string) => {
        setTitle(value)
    }

    const handleDescriptionChange = (value:string) => {
            setDescription(value)
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
            dismis()
        }

    }

    const handleSubmit = async() => {

        const taskToSave:Task = {
            title: task_title,
            description: task_description,
            id: task.id
        }

        let error = false;
        console.log(taskToSave.title.length)
        if (taskToSave.title == null || taskToSave.title.length == 0){
            setErrorTitle('O Título é um campo obrigatório')
            error = true;
        }

        if (taskToSave.description == null || taskToSave.description.length == 0){
            setErrorDescription('A Descrição é um campo obrigatório')
            error = true;
        }
        
        if (error){
            return null
        }

        onSubmitEvent(taskToSave)

        dismis()
    }


    let secondaryActionText = ''

    if (task.id != null){
        secondaryActionText = 'Excluir'
    }else{
        secondaryActionText = 'Cancelar'
    }

    return <div className={style.task_card}>

        <h3 className={style.title}>{task_title != '' ? task_title : 'Título da Tarefa'}</h3>

        <Input label="Título" external_value={task_title} onChange={handleTitleChange} type="text" is_text_area={false} external_error={errorTitle} clearExternalError={setErrorTitle} validationFunction={
            (value:string) => {
                if (value.length > 55){
                    return 'O titulo não pode ter mais que 55 caracteres';
                }

                return null;
            }
        }></Input>

        <Input label="Descrição" external_value={task_description} onChange={handleDescriptionChange} type="text" is_text_area={true} external_error={errorDescription} clearExternalError={setErrorDescription} validationFunction={(value:string) => {
            if (value.length > 255){
                return 'A descrição não pode ter mais que 255 caracteres';
            }

            return null
        }}></Input>
        
        

        <div className={style.buttons}>

            <Button type={ButtomTypes.small} text={secondaryActionText} action={handleCancelOrDelete}></Button>

            <Button type={ButtomTypes.small} text="Salvar" action={handleSubmit}></Button>

        </div>

    </div>

}

export default TaskCard