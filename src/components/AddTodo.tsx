import { useState } from "react";
import { Todo } from "src/models/Todo";

export const AddTodo = ({ todoListStore }) => {
	const [title, setTitle] = useState("");
	const handleOnClick = () => {
		todoListStore.addTodo(new Todo(title));
		setTitle("");
	};

	const handleInputChange = (e) => {
		setTitle(e.target.value);
	};

	return (
		<div className="add-todo">
			<input
				type="text"
				placeholder="Add Todo..."
				value={title}
				onChange={handleInputChange}
			/>
			<button type="button" onClick={handleOnClick}>
				Add
			</button>
		</div>
	);
};
