import { createContext, useContext } from "react";
import { TodoListStore } from "./TodoListStore";

const TodoListContext = createContext<{
	todoListStore: TodoListStore;
	handleOnEnter: (
		event: React.KeyboardEvent<HTMLInputElement>,
		title: string,
		clearInput: () => void,
	) => void;
} | null>(null);

export const useTodoListStore = () => {
	const context = useContext(TodoListContext);
	if (!context) {
		throw new Error("useTodoListStore must be used within a TodoListProvider");
	}
	return context;
};

export const TodoListProvider = ({ children }) => {
	const todoListStore = new TodoListStore();

	const handleOnEnter = (
		event: React.KeyboardEvent<HTMLInputElement>,
		title: string,
		clearTitle: () => void,
	) => {
		if (event.key === "Enter" && title.trim()) {
			todoListStore.addTodo(title);
			clearTitle();
		}
	};

	return (
		<TodoListContext.Provider value={{ todoListStore, handleOnEnter }}>
			{children}
		</TodoListContext.Provider>
	);
};
