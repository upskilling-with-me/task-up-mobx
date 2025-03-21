import { createContext, useContext, useEffect } from "react";
import { TodoListStore } from "./TodoListStore";

export const useGlobalActionLogger = () => {
	useEffect(() => {
		const logUserAction = (event: Event) => {
			console.log("User action:", {
				type: event.type,
				target: (event.target as HTMLElement)?.tagName,
				timestamp: new Date().toISOString(),
			});
		};

		document.addEventListener("click", logUserAction);
		document.addEventListener("keydown", logUserAction);
		document.addEventListener("input", logUserAction);
		document.addEventListener("scroll", logUserAction);

		return () => {
			document.removeEventListener("click", logUserAction);
			document.removeEventListener("keydown", logUserAction);
			document.removeEventListener("input", logUserAction);
			document.removeEventListener("scroll", logUserAction);
		};
	}, []);
};

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
	useGlobalActionLogger();
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
