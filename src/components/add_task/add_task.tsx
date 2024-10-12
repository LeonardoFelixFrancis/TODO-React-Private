import style from './add_task.module.css'

interface AddTaskProp{

    addAction: () => void

}

function AddTask({addAction}: AddTaskProp){

    return <div className={style.Add_Task}>

        <img className={style.add_icon} src="././assets/add.svg" alt="" onClick={addAction}/>

        <p className={style.text}></p>

    </div>

}

export default AddTask