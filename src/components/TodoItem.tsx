import { observer } from "mobx-react-lite";
import type { Todo } from "src/models/Todo";

interface TodoItemProps {
	todo: Todo;
	onDelete: (id: number) => void;
}

export const TodoItem = observer(({ todo, onDelete }: TodoItemProps) => {
	return (
		<li>
			<input
				type="checkbox"
				checked={todo.completed}
				onChange={() => todo.toggle()}
			/>
			{todo.title}
			<button type="button" onClick={() => onDelete(todo.id)}>
				Delete
			</button>
		</li>
	);
});
