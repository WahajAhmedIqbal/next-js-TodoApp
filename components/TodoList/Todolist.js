import { useSelector } from "react-redux";
import TodoItem from "./TodoItem"

const Todolist = () => {
    const todos = useSelector(state => state.todoReducer.todos)
    return (
        <div>
            <h3>todolist </h3>
            {todos.map((item, i) => {
                return <TodoItem key={i} todo={item} />
            })}

        </div>
    );
}

export default Todolist;