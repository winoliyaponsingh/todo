import React from 'react'
import todo_icon from '../assets/todo_icon.png'

const Todo = () => {
  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>

{/*--title--*/}

<div className='flex items-center mt-4 gap-4'>
  <img className='w-7'src={todo_icon} alt="todo_icon"/>
<h1 className='text-2xl font-semibold '>To-Do List</h1>
</div>


    </div>
  )
}

export default Todo
