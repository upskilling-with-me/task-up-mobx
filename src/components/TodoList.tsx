import { observer } from "mobx-react-lite";
import type { TodoListStore, TodoFilters } from "src/Stores/TodoListStore";
import { TodoItem } from "./TodoItem";

interface TodoListProps {
	todoListStore: TodoListStore;
}

const FILTERS: TodoFilters[] = ["all", "completed", "uncompleted"];

export const TodoList = observer(({ todoListStore }: TodoListProps) => {
	const handleOnDelete = (id: number) => {
		todoListStore.deleteTodo(id);
	};

	const handleOnSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
		todoListStore.setFilter(e.target.value as TodoFilters);
	};

	return (
		<div>
			<div>
				<h3>
					Todos: {todoListStore.getTodos.length} / {todoListStore.getTotalTodos}
				</h3>
				<select onChange={handleOnSelect} value={todoListStore.filter}>
					{FILTERS.map((filter) => (
						<option key={filter} value={filter}>
							{filter}
						</option>
					))}
				</select>
			</div>

			<ul>
				{todoListStore.getTodos.map((todo) => (
					<TodoItem todo={todo} key={todo.id} onDelete={handleOnDelete} />
				))}
			</ul>
		</div>
	);
});
