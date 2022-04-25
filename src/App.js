import React, {useState, useEffect} from "react";
import './App.css';
import Forms from './components/Forms';
import TodoList from "./components/TodoList";

function App() {

    // State
    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);
    const [status, setStatus] = useState('all');
    const [filteredTodos, setFilteredTodos] = useState([]);

    useEffect(() => {
        filterHandler();
        saveLocalTodos()
    }, [todos, status]);

    const filterHandler = () => {
        switch (status) {
            case 'all':
                setFilteredTodos(todos);
                break;
            case 'uncompleted':
                setFilteredTodos(todos.filter(todo => !todo.completed));
                break;
            case 'completed':
                setFilteredTodos(todos.filter(todo => todo.completed));
                break;
            default:
                break;
        }
    };

    const saveLocalTodos = () => {
        if (localStorage.getItem('todos') === null) {
            localStorage.setItem('todos', JSON.stringify([]));
        } else {
            localStorage.setItem('todos', JSON.stringify(todos));
        }
    }

    return (
        <div className="App">
            <header>
                <h1>Todo List </h1>
            </header>
            <Forms inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}
                   setStatus={setStatus}/>
            <TodoList setTodos={setTodos} todos={todos} inputText={inputText} filteredTodos={filteredTodos}/>
        </div>
    );
}

export default App;
