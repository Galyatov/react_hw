import { useState } from "react";
import "./App.css";

export default function App() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const addTodo = () => {
        if (inputValue.trim() === "") return;
        setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
        setInputValue("");
    };
    const toggleTodo = (id) => {
        setTodos(
            todos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };
    const completedTodos = todos.filter(todo => todo.completed);
    const uncompletedTodos = todos.filter(todo => !todo.completed);

    return (
        <div className="app-container">
            <div className="todo-box">
                <h2>✨ Мої задачі</h2>
                <h3>⏳ У процесі</h3>
                <ul className="todo-list">
                    {uncompletedTodos.map(todo => (
                        <li key={todo.id} onClick={() => toggleTodo(todo.id)} className="todo-item">
                            <span className="gradient-text">{todo.text}</span>
                        </li>
                    ))}
                </ul>
                <h3>✅ Виконані</h3>
                <ul className="todo-list">
                    {completedTodos.map(todo => (
                        <li key={todo.id} onClick={() => toggleTodo(todo.id)} className="todo-item completed">
                            <span className="gradient-text">{todo.text}</span>
                        </li>
                    ))}
                </ul>
                <div className="todo-form">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Введіть задачу..."
                    />
                    <button onClick={addTodo}>➕ Додати</button>
                </div>
            </div>
        </div>
    );
}
