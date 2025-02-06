import { Todo } from "src/models/Todo";
import { TodoListStore } from "src/Stores/TodoListStore";
import { AddTodo } from "./AddTodo";
import { TodoList } from "./TodoList";

const TodoBoard = () => {
	const todoListStore = new TodoListStore();

	return (
		<div className="todo-board">
			<h1>Welcome to your Todo Board</h1>
			<AddTodo todoListStore={todoListStore} />
			<TodoList todoListStore={todoListStore} />
		</div>
	);
};

export default TodoBoard;
