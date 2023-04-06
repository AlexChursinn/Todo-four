import { RiDeleteBin2Line, RiTodoFill } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import styles from "./Todo.module.css";

function Todo({ todo, deleteTodo, toggleTodo }) {
  return (
    <div
      className={`${styles.todo} ${
        todo.isCompleted ? styles.completedTodo : ""
      } `} /* Добавили шаблонную строку и тернарное выражение обработки этой логики если isCompleted true то применить класс  styles.completedTodo если нет то '' */
    >
      {/* Или можно через оператор и className={`${styles.todo} ${
        todo.isCompleted && styles.completedTodo} `}  но тогда добавится в класс false но так не совсем правильно*/}
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo.text}</div>
      <RiDeleteBin2Line
        className={styles.deleteIcon}
        onClick={() => deleteTodo(todo.id)}
        /* Удаляем задачу кликнув на иконку */
      />
      <FaCheck
        className={styles.checkIcon}
        onClick={() =>
          toggleTodo(todo.id)
        } /* При нажатии передаем id объекта завершённой задачи */
      />
    </div>
  );
}

export default Todo;

/* onDoubleClick={() => deleteTodo(index)} удаляем из списка определенную задачу по индексу */
