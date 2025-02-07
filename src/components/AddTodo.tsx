import { useState } from "react";
import styled from "styled-components";

export const AddTodo = ({ todoListStore }) => {
	const [title, setTitle] = useState("");

	const handleOnClick = () => {
		if (title.trim()) {
			todoListStore.addTodo(title);
			setTitle("");
		}
	};

	const handleInputChange = (e) => {
		setTitle(e.target.value);
	};

	return (
		<TodoInput>
			<Input
				type="text"
				placeholder="Add a new task..."
				value={title}
				onChange={handleInputChange}
			/>
			<Button onClick={handleOnClick}>Add</Button>
		</TodoInput>
	);
};

const TodoInput = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 10px;
	background: #f9f9f9;
	padding: 10px;
	border-radius: 8px;
`;

const Input = styled.input`
	flex: 1;
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 6px;
	font-size: 14px;

	&:focus {
		outline: none;
		border-color: #4caf50;
	}
`;

const Button = styled.button`
	padding: 10px 20px;
	background-color: #4caf50;
	color: white;
	border: none;
	border-radius: 6px;
	cursor: pointer;
	transition: background 0.2s ease-in-out;

	&:hover {
		background-color: #45a049;
	}
`;
