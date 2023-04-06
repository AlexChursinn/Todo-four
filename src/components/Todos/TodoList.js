import Todo from "./Todo";
import styles from "./TodoList.module.css";

const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
  return (
    <div className={styles.todoListContainer}>
      {!todos.length && <h2>Todo list is empty</h2>}
      {todos.map((todo) => (
        <Todo
          todo={todo}
          id={todo.id}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;

/*  {todos.length === 0 && <h2>Todo list is empty</h2>}
Если todos.length === 0 то покажем текст что нет задач если длина есть то покажем наши задачи но лучше через оператор не сделать !todos.length
*/
