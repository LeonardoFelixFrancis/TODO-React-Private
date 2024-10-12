import { Task } from "../models/task_model";

export function getTasks(){
    const tasks: Task[] = [
        { id: 1, title: 'Task 1', description: 'Description of Task 1' },
        { id: 2, title: 'Task 2', description: 'Description of Task 2' },
        { id: 3, title: 'Task 3', description: 'Description of Task 3' },
    ];

    return tasks
}