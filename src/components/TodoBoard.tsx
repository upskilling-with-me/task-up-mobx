import { useRef } from "react";
import { TodoListStore } from "src/stores/TodoListStore";
import { AddTodo } from "./AddTodo";
import { TodoList } from "./TodoList";
import styled from "styled-components";

export const TodoBoard = () => {
	const todoListStoreRef = useRef<TodoListStore | null>(null);

	if (!todoListStoreRef.current) {
		todoListStoreRef.current = new TodoListStore();
	}

	return (
		<Container>
			<Title>Welcome to your Todo Board</Title>
			<AddTodo todoListStore={todoListStoreRef.current} />
			<TodoList todoListStore={todoListStoreRef.current} />
		</Container>
	);
};

const Container = styled.div`
	max-width: 500px;
	margin: 40px auto;
	padding: 20px;
	background: #fff;
	border-radius: 10px;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
	text-align: center;
`;

const Title = styled.h1`
	font-size: 24px;
	color: #333;
	margin-bottom: 20px;
`;
