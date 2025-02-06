import { Todo } from "src/models/Todo";
import { TodoListStore } from "src/Stores/TodoListStore";
import { AddTodo } from "./AddTodo";
import { TodoList } from "./TodoList";

// Sample default todo titles for the TodoListStore to start with.
const defaultTodoTitles = ["Buy groceries", "Wash Car", "Cook Rice"];

const TodoBoard = () => {
	const todoListStore = new TodoListStore();

	const todos: Todo[] = defaultTodoTitles.map((title) => new Todo(title));

	for (const todo of todos) {
		todoListStore.addTodo(todo);
	}

	return (
		<div className="todo-board">
			<h1>Welcome to your Todo Board</h1>
			<AddTodo todoListStore={todoListStore} />
			<TodoList todoListStore={todoListStore} />
		</div>
	);
};

export default TodoBoard;
