import React, { useEffect, useState } from "react";
import { createTask, deleteTask, getTask, updateTask } from "../api/task.api";
import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast"
export function TaskFormPage() {
  const navigate = useNavigate()

  const params = useParams()
  // de esta forma es con el hook form, tenemos el register que es para registrar los datos y el handleSubmit que es el manejador, es como lo que hacemos en la funcion como lo aprendi al comienzo de aprendizaje
  const { register, handleSubmit, formState: {
    errors
  }, setValue } = useForm()
  // hook form
  const onSubmit = handleSubmit(async task => {
    if (params.id) {
      await updateTask(params.id, task)
      toast.success('Updated task', { position: "bottom-right", style: { background: "#101010", color: "#fff", fontFamily: "monospace" } })
    } else {
      await createTask(task)
      toast.success('Crated task', { position: "bottom-right", style: { background: "#101010", color: "#fff", fontFamily: "monospace" } })
    }
    navigate("/tasks")

  })



  // De esta forma es como lo aprendi cuando comencé. 
  // const handleSubmit = (e) => {

  //   e.preventDefault()
  //   const title = e.target.title.value
  //   const description = e.target.description.value
  //   const done = e.target.done.value
  //   createTask({ title, description, done })

  // }
  useEffect(() => {
    if (params.id) {

      async function readTask() {
        const task = await getTask(params.id)
        // console.log("tarea", task)
        setValue("title", task.data.title)
        setValue("description", task.data.description)
        setValue("done", task.data.done)

      }
      readTask()
    }

  }, [params.id])
  return <div className="max-w-xl mx-auto"><form onSubmit={onSubmit}>
    <input className="bg-zinc-700 p-3 rounded-lg block w-full mb-3" type="text" placeholder="title" name="title" {...register('title', { required: true })} />
    {errors.title && <span>this field is required</span>}
    <textarea className="bg-zinc-700 p-3 rounded-lg block w-full mb-3" rows="3" type="text" placeholder="description" name="description"  {...register('description', { required: true })} />
    {errors.description && <span>this field is required</span>}
    <input type="checkbox" name="done" {...register('done')} />
    <button className="bg-indigo-500 p-3 rounded-lg block w-full mt-3">Save</button>
  </form>
    {
      params.id &&
      <div className="flex justify-end">
        <button className="bg-red-500 p-3 rounded-lg w-48 mt-3" onClick={async () => {
          const accepted = window.confirm("are you sure?")
          if (accepted == true) { await deleteTask(params.id); navigate("/tasks"); toast.success('Deleted task', { position: "bottom-right", style: { background: "#101010", color: "#fff", fontFamily: "monospace" } }) }
        }}>Delete</button>
      </div>
    }


  </div>;
}
