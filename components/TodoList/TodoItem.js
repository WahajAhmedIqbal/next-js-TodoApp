import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../../redux/action";

const TodoItem = ({ todo }) => {
    const dispatch = useDispatch()
    const [editable, setEditable] = useState(false)
    const [name, setname] = useState(todo.name)
    const editHandler = () => {
        dispatch(updateTodo(
            {
                ...todo,
                name: name
            }
        ))
        if(editable) {
            setname(todo.name)
        }
        setEditable(!editable)

    }
    return (
        <div>
            <ul>
                <li>
                    {editable ? <input type='text' value={name} onChange={e => setname(e.target.value)}/> : todo.name}
                    <button onClick={() => editHandler(todo)} >Edit</button>
                    <button onClick={() => dispatch(deleteTodo(todo.id))} >delete</button>
                </li>
            </ul>
        </div>
    );
}

export default TodoItem;