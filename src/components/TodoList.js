import React from "react";
import Todo from "./Todo.js";

const TodoList = ({todos, setTodos, filteredTodos, }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map(todo => (
                    <Todo setTodos={setTodos} key={todo.id} text={todo.text} todos={todos} todo={todo}/>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;