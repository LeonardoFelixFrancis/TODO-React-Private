import { useState } from "react"
import Menu from "../components/menu/menu"
import TaskCard from "../components/task_card/task_card"
import TaskLine from "../components/task_line/task_line"
import { Task } from "../models/task_model"

function TodoPage(){

    const [selectedTask, setTask] = useState<Task|null>(null)

    const selectTask = (task:Task) => {
        setTask(task)
    }

}

export default TodoPage