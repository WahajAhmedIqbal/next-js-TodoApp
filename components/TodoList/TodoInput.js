import { useState } from "react";
import { useDispatch } from "react-redux";
import {addTodo} from '../../redux/action'

const todoInput = () => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const submitHandler = () => {
        const min = 1;
      const max = 100;
      const rand =  min + (Math.random() * (max-min));
        const todo =  {
            id: rand,
            name: input
        }
        dispatch(addTodo(todo))
    }
    
    return (
        <div >
            <input type='text' value={input} onChange={e => setInput(e.target.value)} placeholder='Add Item' />
            <button type='submit' onClick={submitHandler}>Add</button>
        </div>
    );
}

export default todoInput;