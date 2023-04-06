import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import TodosActions from "./components/Todos/TodosActions";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4(),
    };
    setTodos([
      ...todos,
      newTodo,
    ]); /*теперь будем добовлять не text а новый объект newTodo */
  };

  /* Должны отфильтровать массив и убрать от туда одну задачу 
  и задача оставить все индексе кроме который приходит*/
  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  /* Теперь по id */

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo };
        /* Если todo.id === id то задача выполнена
        если нет то вернем старый объект */
      })
    );
  };

  /* При клике на иконку удаляем все задачи */
  const resetTodoHandler = () => {
    setTodos([]);
  };

  /* При клике на иконку удаляем только завершенные задачи */
  const deletedCopletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
    /* filter оставляет в массиве те элементы которые функция вернула правидовое значение */
  };

  /* Где-то должны считать сколько у нас завершённых задач  */
  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length;

  /* Хотим найти все задачи которые завершены и найти длину результирущего массива 
  filter возвращает нам массив и если не одна задача не завершена ещё то все равно будет возращён пустой массив и поэтому можно использовать свойство length для того чтобы найти сколько у нас завершенных задач
  */

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      {!!todos.length && (
        <TodosActions
          completedTodosExist={
            !!completedTodosCount
          } /* Если есть завершенная задача то значение этого совйства будет true 
          если нет то будет 0, а !! не не будет false */
          resetTodos={resetTodoHandler}
          deletedCopletedTodos={deletedCopletedTodosHandler}
        />
      )}{" "}
      {/* Показываем TodosActions если в массиве todos есть хоть один элемент */}
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />
      {completedTodosCount > 0 && (
        <h2>{`You have completed ${completedTodosCount} ${
          completedTodosCount > 1 ? "todos" : "todo"
        }`}</h2>
      )}
      {/* Если completedTodosCount больше нуля счётчик завершенных задач то покажем текст с шаблонной строкой которая показывает колличество завершенных задач 
      но есть баг если всего одна завершенная задача то показывает todos а надо todo
      ${completedTodosCount > 1 ? "todos" : "todo"} решается это так*/}
    </div>
  );
}

export default App;
