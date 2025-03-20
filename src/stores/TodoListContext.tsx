import { createContext, useContext } from "react";
import { TodoListStore } from "./TodoListStore";

const TodoListContext = createContext<TodoListStore | null>(null);

export const useTodoListStore = () => {
	const context = useContext(TodoListContext);
	if (!context) {
		throw new Error("useTodoListStore must be used within a TodoListProvider");
	}
	return context;
};

export const TodoListProvider = ({ children }) => {
	const store = new TodoListStore();

	return (
		<TodoListContext.Provider value={store}>
			{children}
		</TodoListContext.Provider>
	);
};
