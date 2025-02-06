import { observer } from "mobx-react-lite";
import type { TodoListStore } from "src/Stores/TodoListStore";
import { TodoItem } from "./TodoItem";

interface TodoListProps {
	todoListStore: TodoListStore;
}

export const TodoList = observer(({ todoListStore }: TodoListProps) => {
	const handleOnDelete = (id: number) => {
		todoListStore.deleteTodo(id);
	};

	return (
		<div>
			<h2>Total Todos: {todoListStore.totalTodosCount}</h2>
			<h2>Uncompleted todos: {todoListStore.unCompleteTodosCount}</h2>
			<ul>
				{todoListStore.unCompletedTodos.map((todo) => (
					<TodoItem todo={todo} key={todo.id} onDelete={handleOnDelete} />
				))}
			</ul>
			<h2>Completed todos: {todoListStore.completeTodosCount}</h2>
			<ul>
				{todoListStore.completedTodos.map((todo) => (
					<TodoItem todo={todo} key={todo.id} />
				))}
			</ul>
		</div>
	);
});
