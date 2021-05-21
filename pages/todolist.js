import Title from "../components/Title"
import TodoInput from "../components/TodoList/TodoInput"
import TodoList from "../components/TodoList/Todolist"
import styles from '../styles/todoItem.module.css'

const todolist = () => {
    return (
        <div className={styles.mainbox}>
        <Title title='Todo List'/>
        <h4>todolist</h4>
        <TodoInput />
        <TodoList />
        </div>

    );
}

export default todolist;