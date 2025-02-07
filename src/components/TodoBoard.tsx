import { useRef } from "react";
import { TodoListStore } from "src/Stores/TodoListStore";
import { AddTodo } from "./AddTodo";
import { TodoList } from "./TodoList";

const TodoBoard = () => {
	// Use useRef to persist the TodoListStore instance across re-renders
	const todoListStoreRef = useRef(new TodoListStore());

	return (
		<div className="todo-board">
			<h1>Welcome to your Todo Board</h1>
			<AddTodo todoListStore={todoListStoreRef.current} />
			<TodoList todoListStore={todoListStoreRef.current} />
		</div>
	);
};

export default TodoBoard;
