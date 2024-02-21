import React from 'react'
import { useTodo } from '../contexts/TodoContext';



function TodoForm() {
    // Take input from Form and then add in Local Storage using addTodo 
    const {todos, addTodo} = useTodo()
    const [todoMsg, setTodoMsg] = React.useState("")


    const add = (e)=> {
        e.preventDefault()
        if (!todoMsg) return
        
        addTodo({todo:todoMsg, completed: false})
        setTodoMsg('')
    }

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todoMsg}
                onChange={(e)=> setTodoMsg(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}
    
export default TodoForm;
    

