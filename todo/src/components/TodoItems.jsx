import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_icon  from '../assets/delete.png'


const TodoItems = ({text, id  , isComplete, deleteTodo,toggle}) => {
  return (
    <div  className='flex items-center my-3 gap-2'>
      {/* todolists items */}
<div onClick={()=>{toggle(id)}}className='flex flex-1 items-center cursor-pointer '>

  < img className='w-8' src={isComplete? tick: not_tick} alt=""/>
  <p className={`ml-4 text-slate-700 text-[17px] ${isComplete ? "line-through": ""}` }>{text}</p>
  </div>
  
  <img onClick={()=> {deleteTodo(id)}}className='w-5 cursor-pointer' src={delete_icon} alt=""/>

      
    </div>
  )
}

export default TodoItems
