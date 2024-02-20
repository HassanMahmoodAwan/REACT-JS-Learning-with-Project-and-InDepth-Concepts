import React, { useEffect, useState } from 'react'
import {TodoProvider, todoContext, useTodo} from "./contexts"
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItems from './components/TodoItem'
// import { TodoProvider } from './contexts/todoContext'

function App() {
  const [todos, setTodos] = useState([])
  
  const addTodo = (todo)=>{
    setTodos( (prev)=> ([{id:Date.now, ...todo} ,prev]) )
  }
  const updateTodo = (id, todo)=>{
    setTodos( (prev)=> (prev.map( (each)=> each.id == id ? todo: each )))
  }
  const deleteTodo = (id)=> {
    setTodos( (prev)=> prev.filter( (each)=> each.id != id ))
  }
  const completedToggle = (id)=>{
    setTodos( 
      (prev)=> prev.map( 
        (each)=> id == each.id ? 
        {...each, completed: !each.completed} : each))
  }

  // Extract all previous TODOS
  useEffect( ()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))
    setTodos(todos)
  }, [])
  // Store all todos in LocalStorage
  useEffect( ()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <todoProvider value={{todos, addTodo, updateTodo, deleteTodo, completedToggle}}>
      <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
              <h1 className="text-2xl font-bold text-center  mb-8 mt-2">Manage Your Todos</h1>
              <div className="mb-4">
                  {/* Todo form goes here */} 
                  <TodoForm />
              </div>
              <div className="flex flex-wrap gap-y-3">
                  {/*Loop and Add TodoItem here */}
                  <TodoItems />
              </div>
          </div>
      </div>
    </todoProvider>
  )
}

export default App
