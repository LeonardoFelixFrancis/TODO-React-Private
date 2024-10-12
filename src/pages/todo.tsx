import { useEffect, useState } from "react"
import Menu from "../components/menu/menu"
import TaskCard from "../components/task_card/task_card"
import TaskLine from "../components/task_line/task_line"
import AddTask from "../components/add_task/add_task"
import { listTasks } from "../services/task_service"
import { Task } from "../models/task_model"
import DeleteTask from "../components/delete_task/delete_task"

function TodoPage(){

    const [selectedTask, setTask] = useState<Task|null>(null)
    const [taskLit, setTaskList] = useState([])
    const [showDelete, setShowDelete] = useState(false)

    const loadTask = async () => {
        const responseList = await listTasks()
        setTaskList(responseList.data)
    }

    useEffect(() => {
        loadTask()
    }, [])

    const openTaskCard = (task:Task) => {
   
        setTask(task)
    }

    const closeDeleteConfirm = () => {
        setShowDelete(false)
        loadTask()
    }
    

    const onDeleteEvent = () => {
        setShowDelete(true)
    }

    let taskCard = <></>

    if (selectedTask != null){
        taskCard = <TaskCard task={selectedTask} onDeleteEvent={onDeleteEvent}></TaskCard>
    }else{
        taskCard = <></>
    }
    
    let confirmDelete  = <></>

    if (showDelete && selectedTask != null){
        confirmDelete = <DeleteTask task={selectedTask} close={closeDeleteConfirm}></DeleteTask>
    }else{
        confirmDelete  = <></>
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
        
        
    </div>

}

export default TodoPage