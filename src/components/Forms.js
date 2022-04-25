import React from "react";

const Forms = ({inputText, setInputText, todos, setTodos, setStatus}) => {
    // TODO: Add your code here
    const inputTextHandler = (event) => {
        console.log(event.target.value);
        setInputText(event.target.value);
    }

    const submitTodoHandler = (event) => {
        event.preventDefault();
        setTodos([...todos, {text: inputText, completed: false, id: Math.random() * 1000}]);
        setInputText("");
    }

    const statusHandler = (event) => {
        setStatus(event.target.value);
    }

    return (
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input"/>
            <button onClick={submitTodoHandler} className="todo-button" type="submit">SUB</button>
            <div className="select">
                <select name="todos" className="filter-todo" onChange={statusHandler}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                    ">
                </select>
            </div>
        </form>
    );
};

export default Forms;