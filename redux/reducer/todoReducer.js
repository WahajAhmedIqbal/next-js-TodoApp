import {ADD_TODO, DELETE_TODO, UPDATE_TODO} from '../constant'
const initialState = {
    todos: [
        {
            id: 1,
            name: 'item 1'
        }
    ]
     
}
export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [action.payload, ...state.todos]
            }
        case DELETE_TODO:
            const newtodo = state.todos.filter(todo => todo.id !== action.payload)
            return {
                ...state,
                todos: newtodo, ...state.todos
            }
        case UPDATE_TODO:
            break
        default:
           return state
    }
}