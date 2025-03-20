import { observer } from "mobx-react-lite";
import type { Todo } from "src/models/Todo";

interface TodoItemProps {
	todo: Todo;
	onDelete: (id: number) => void;
	onToggle: (id: number) => void;
}

export const TodoItem = observer(function TodoItem({
	todo,
	onDelete,
	onToggle,
}: TodoItemProps) {
	return (
		<li>
			<input
				type="checkbox"
				checked={todo.completed}
				onChange={() => onToggle(todo.id)}
			/>
			{todo.title}
			<button type="button" onClick={() => onDelete(todo.id)}>
				Delete
			</button>
		</li>
	);
});
