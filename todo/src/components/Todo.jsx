import React, {useRef, useState} from 'react'
import todo_icon from '../assets/todo_icon.png'
import TodoItems from './TodoItems'

const Todo = () => {

const [todoList, setTodoList] = useState([]);

  const inputRef = useRef();

  const add = () =>
  {
const inputText = inputRef.current.value.trim();
console.log(inputText);

if(inputText === "")
{
  return null;
}

const newTodo = {
  id:Date.now(),
  text:inputText,
  isComplete: false,
}

setTodoList((prev)=> [...prev,newTodo]);
inputRef.current.value="";

  }


  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>

{/*--title--*/}

<div className='flex items-center mt-4 gap-4'>
  <img className='w-7'src={todo_icon} alt="todo_icon"/>
<h1 className='text-2xl font-semibold '>To-Do List</h1>
</div>

{/*--input box-- */}

<div className=' flex items-center bg-gray-200 my-8 rounded-full'>

  <input ref={inputRef} className='border-0 placeholder:text-slate-600 bg-transparent h-14 pl-6 pr-2 flex-1 outline-none' type="text" placeholder='Add your Task'/>

  <button onClick={add} className='border-0 rounded-full bg-orange-800 h-14 text-white w-32 text-lg font-medium cursor-pointer'>ADD +</button>
</div>

  {/*todo list*/}
<div>
  <TodoItems text="Learn React.js"/>
  <TodoItems text="Learn FireBase"/>
</div>
    </div>
  )
}

export default Todo
