import { useEffect, useState } from "react"
import Menu from "../components/menu/menu"
import TaskCard from "../components/task_card/task_card"
import TaskLine from "../components/task_line/task_line"
import AddTask from "../components/add_task/add_task"
import { listTasks, updateTask } from "../services/task_service"
import { Task } from "../models/task_model"
import DeleteTask from "../components/delete_task/delete_task"
import { deleteTask } from "../services/task_service"
import { createTask } from "../services/task_service"
import { Response } from "../models/response"
import ResponseCard from "../components/response_card/response_card"


function TodoPage(){

    const [selectedTask, setTask] = useState<Task|null>(null)
    const [taskLit, setTaskList] = useState([])
    const [showDelete, setShowDelete] = useState(false)
    const [apiResponse, setResponse] = useState<Response|null>(null)

    const loadTask = async () => {
        const responseList = await listTasks()

        if (responseList.data == null){
            setTaskList([])
        }else{
        setTaskList(responseList.data)
        }
    }

    useEffect(() => {
        loadTask();

    }, [])

    const openTaskCard = (task:Task) => {
        if (selectedTask == null){
            setTask(task);
        }
    }

    const closeDeleteConfirm = () => {
        setShowDelete(false);
        loadTask();
        setTask(null);
    }
    

    const onOpenDeleteEvent = () => {
        setShowDelete(true)
    }

    const onDeleteEvent = async(task:Task) => {
        const response = await deleteTask(task.id!)
        
        if (apiResponse != null){
            setResponse(null)
        }

        setResponse(
            {
                message:response.message,
                status_code:response.status_code,
                data:response.data
            }
        )
        dismis()
    }

    const onSubmitEvent = async(task:Task) => {
        let response;
        if (task.id == null){
            response = await createTask(task);
        }else{
            response = await updateTask(task);
        }

        if (apiResponse != null){
            setResponse(null)
        }

        setResponse(
            {
                message:response.message,
                status_code:response.status_code,
                data:response.data
            }
        )
        dismis()
    }

    const dismis = () => {
        setTask(null);
        loadTask();
    }



    let taskCard = <></>

    if (selectedTask != null){
        taskCard = <TaskCard task={selectedTask} onDeleteEvent={onOpenDeleteEvent} onSubmitEvent={onSubmitEvent} dismis={dismis}></TaskCard>
    }else{
        taskCard = <></>
    }
    
    let confirmDelete  = <></>

    if (showDelete && selectedTask != null){
        confirmDelete = <><DeleteTask task={selectedTask} close={closeDeleteConfirm} deleteAction={onDeleteEvent}></DeleteTask><div className="overlay"></div></>
    }else{
        confirmDelete  = <></>
    }

    
    let response_el = <></>
    
    if (apiResponse != null){
        response_el = <ResponseCard message={apiResponse?.message} status={apiResponse?.status_code} dismis={setResponse}></ResponseCard>
    }
    

    return <div className="todo-container">

        <Menu></Menu>

        <div className="task-list">

            <AddTask addAction={openTaskCard}></AddTask>

            {taskLit.map((task:Task) => (
                <TaskLine key={task.id} task={task} openTaskFunc={openTaskCard}/> // Use key prop for list items
             ))}

        
        </div>
        
        {taskCard}
        
        {confirmDelete}
        
        {response_el}

    </div>

}

export default TodoPage