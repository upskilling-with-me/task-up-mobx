import { observer } from "mobx-react-lite";
import type { Todo } from "src/models/Todo";
import type { TodoListStore } from "src/Stores/TodoListStore";

interface TodoViewProps {
	todo: Todo;
}

interface TodoListViewProps {
	todoListStore: TodoListStore;
}
export const ShowTodos = ({ todoListStore }) => {
	const handleOnDelete = (id) => {
        todoListStore.deleteTodo(id);
    };
	const TodoView = observer(({ todo }: TodoViewProps) => (
		<li>
			<input
				type="checkbox"
				checked={todo.completed}
				onChange={() => todo.toggle()}
			/>
			{todo.title}
			<button type="button" onClick={() => handleOnDelete(todo.id)}>
				Delete
			</button>
		</li>
	));

	const TodoListView = observer(({ todoListStore }: TodoListViewProps) => (
		<div>
			<h2>Total Todos: {todoListStore.totalTodosCount}</h2>
			<h2>Uncompleted todos: {todoListStore.unCompleteTodosCount}</h2>
			<ul>
				{todoListStore.unCompletedTodos.map((todo) => (
					<TodoView todo={todo} key={todo.id} />
				))}
			</ul>
			<h2>Completed todos: {todoListStore.completeTodosCount}</h2>
			<ul>
				{todoListStore.completedTodos.map((todo) => (
					<TodoView todo={todo} key={todo.id} />
				))}
			</ul>
		</div>
	));
	return (
		<div className="show-todo">
			<TodoListView todoListStore={todoListStore} />
		</div>
	);
};
