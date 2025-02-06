import { Todo } from "src/models/Todo";
import { TodoListStore } from "src/Stores/TodoListStore";
import { ShowTodos } from "./ShowTodos";
import { AddTodo } from "./AddTodo";

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
			<ShowTodos todoListStore={todoListStore} />
		</div>
	);
};

export default TodoBoard;
