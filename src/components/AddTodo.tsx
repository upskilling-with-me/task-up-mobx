import { useState } from "react";

export const AddTodo = ({ todoListStore }) => {
	const [title, setTitle] = useState("");

	const handleOnClick = () => {
		todoListStore.addTodo(title);
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
