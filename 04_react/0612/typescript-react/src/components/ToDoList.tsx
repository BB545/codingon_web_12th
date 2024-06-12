import React, { useRef, useState } from 'react'
import ToDoItem from './ToDoItem';
import { TodoItem } from '../types/types';

export default function ToDoList() {
    // 전체 투두 목록
    const [todos, setTodos] = useState<TodoItem[]>([]);
    // 새로 추가 될 투두
    const [newTodo, setNewTodo] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    // 투두 새로 추가
    const addTodo = () => {
        const updateTodos = [
            ...todos,
            {id: Date.now(), text: newTodo, completed: false}
        ];
        setTodos(updateTodos);
        setNewTodo('');
    }

    // 엔터키 입력시 투두 추가 (키보드 이벤트)
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') addTodo();
    }

    const focusInput = () => {
        inputRef.current?.focus(); // null일 수 있기 때문에 ? 추가
    }

    // 투두 아이템 완료 상태 변경
    const toggleComplete = (targetId: number) => {
        const updatedTodos = todos.map((todo) => {
            return todo.id === targetId ? {...todo, completed: !todo.completed} : todo;
        });
        setTodos(updatedTodos);
    }

    return (
        <div>
            <h1>ToDoList</h1>
            <div>
                완료 개수: {todos.filter((todo) => todo.completed === true).length}
            </div>
            <div>
                <input type="text" placeholder='new todo' value={newTodo} onChange={(e) => setNewTodo(e.target.value)} onKeyDown={handleKeyDown} ref={inputRef} />
                <button onClick={addTodo}>ADD</button>
                <button onClick={focusInput}>FOCUS</button>
            </div>
            <ul>
                {todos.map((todo) => {
                    return(
                        <ToDoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} />
                    )
                })}
            </ul>
        </div>
    )
}
