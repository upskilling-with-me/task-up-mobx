import { observer } from "mobx-react-lite";
import type { TodoListStore, TodoFilters } from "src/Stores/TodoListStore";
import { TodoItem } from "./TodoItem";
import styled from "styled-components";

interface TodoListProps {
	todoListStore: TodoListStore;
}

const FILTERS: TodoFilters[] = ["all", "completed", "uncompleted"];

export const TodoList = observer(({ todoListStore }: TodoListProps) => {
	const handleOnDelete = (id: number) => {
		todoListStore.deleteTodo(id);
	};

	const handleOnToggle = (id: number) => {
		todoListStore.toggleTodo(id);
	};

	const handleOnSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
		todoListStore.setFilter(e.target.value as TodoFilters);
	};

	return (
		<Container>
			<Summary>
				<FilterSelect onChange={handleOnSelect} value={todoListStore.filter}>
					{FILTERS.map((filter) => (
						<option key={filter} value={filter}>
							{filter.charAt(0).toUpperCase() + filter.slice(1)}
						</option>
					))}
				</FilterSelect>
				<TodoCount>
					Tasks: <strong>{todoListStore.getTodos.length}</strong> /{" "}
					{todoListStore.getTotalTodos}
				</TodoCount>
			</Summary>

			<TodoListContainer>
				{todoListStore.getTodos.length > 0 ? (
					todoListStore.getTodos.map((todo) => (
						<TodoItem
							todo={todo}
							key={todo.id}
							onDelete={handleOnDelete}
							onToggle={handleOnToggle}
						/>
					))
				) : (
					<EmptyMessage>No tasks found.</EmptyMessage>
				)}
			</TodoListContainer>
		</Container>
	);
});

const Container = styled.div`
	margin-top: 20px;
	padding: 20px;
	background: #fff;
	border-radius: 10px;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const Summary = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 15px;
	padding: 10px;
	background: #f5f5f5;
	border-radius: 8px;
`;

const FilterSelect = styled.select`
	padding: 10px;
	font-size: 14px;
	border: 1px solid #ccc;
	border-radius: 6px;
	cursor: pointer;
	background: white;
	transition: all 0.2s ease-in-out;

	&:hover {
		border-color: #4caf50;
	}
`;

const TodoCount = styled.h3`
	margin: 0;
	font-size: 16px;
	color: #333;
`;

const TodoListContainer = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
`;

const EmptyMessage = styled.p`
	text-align: center;
	font-size: 16px;
	color: #888;
	padding: 10px;
`;
