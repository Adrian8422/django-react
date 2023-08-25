import { deleteTask } from "../api/task.api"
import { useNavigate } from "react-router-dom"
export function TaskCardUI({ task }) {
    const navigate = useNavigate()
    // const handleDelete = (e) => {
    //     e.preventDefault()
    //     const id = e.target.name
    //     deleteTask(id)
    //     window.location.reload()

    // }

    return <div onClick={() => navigate(`/task/${task.id}`)} className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer" key={task.id}>
        <h1 className="font-bold uppercase">{task.title}</h1>
        <p className="text-slate-400">{task.description}</p>
        <p>{task.done}</p>
        {/* <a name={task.id} onClick={handleDelete}>delete</a> */}
    </div>
}