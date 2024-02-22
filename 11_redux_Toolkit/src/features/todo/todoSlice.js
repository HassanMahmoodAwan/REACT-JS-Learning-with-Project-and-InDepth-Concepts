import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos: [{
        id: nanoid(),
        todoText: 'Hello to redux State Managment'
    }
        
    ]
}

const todoSlice = createSlice({
    name: "todosApp",
    initialState: initialState,
    reducers: {
        addTodo: (state, actions)=>{
            const todo = {
                id: nanoid(),
                todoText: actions.payload
            }
            state.todos.push(todo)
        },
        deleteTodo: (state, actions)=>{
            state.todos = state.todos.filter( (indiv_Todo)=> indiv_Todo.id !== actions.payload)
        }

    }
})

export const {addTodo, deleteTodo} = todoSlice.actions

const todoReducer = todoSlice.reducer
export default todoReducer

