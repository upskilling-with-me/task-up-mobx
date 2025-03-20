import { makeObservable, observable, action, computed } from "mobx";
import { Todo } from "../models/Todo";

// Sample default todo titles for the TodoListStore to start with.
const defaultTodoTitles = ["Buy groceries", "Wash Car", "Cook Rice"];

export type TodoFilters = "all" | "completed" | "uncompleted";

export class TodoListStore {
	todos: Todo[] = [];
	filter: TodoFilters = "all";
	totalTodos: number;

	constructor() {
		makeObservable(this, {
			todos: observable,
			filter: observable,
			totalTodos: observable,
			addTodo: action,
			deleteTodo: action,
			toggleTodo: action,
			setFilter: action,
			getTodos: computed,
			getTotalTodos: computed,
		});

		this.todos = defaultTodoTitles.map((title) => new Todo(title));
		this.totalTodos = this.todos.length;
	}

	addTodo(title: string) {
		if (title === "") return;
		this.todos.push(new Todo(title));
	}

	deleteTodo(id: number) {
		this.todos = this.todos.filter((t) => t.id !== id);
	}
	toggleTodo(id: number) {
		const todo = this.todos.find((t) => t.id === id);

		if (todo) todo.completed = !todo.completed;
	}

	setFilter(filter: TodoFilters) {
		this.filter = filter;
	}

	get getTodos() {
		switch (this.filter) {
			case "all":
				return this.todos;
			case "completed":
				return this.todos.filter((todo) => todo.completed);
			case "uncompleted":
				return this.todos.filter((todo) => !todo.completed);
			default:
				return [];
		}
	}

	get getTotalTodos() {
		return this.todos.length;
	}
}
