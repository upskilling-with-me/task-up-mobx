import { makeObservable, observable, action, computed } from "mobx";
import { Todo } from "../models/Todo";

// Sample default todo titles for the TodoListStore to start with.
const defaultTodoTitles = ["Buy groceries", "Wash Car", "Cook Rice"];

export class TodoListStore {
	todos: Todo[] = [];

	constructor() {
		makeObservable(this, {
			todos: observable,
			addTodo: action,
			deleteTodo: action,
			completedTodos: computed,
			unCompletedTodos: computed,
			completeTodosCount: computed,
			unCompleteTodosCount: computed,
			totalTodosCount: computed,
		});

		this.todos = defaultTodoTitles.map((title) => new Todo(title));
	}

	addTodo(title: string) {
		if (title === "") return;
		this.todos.push(new Todo(title));
	}

	deleteTodo(id: number) {
		this.todos = this.todos.filter((t) => t.id !== id);
	}

	get completedTodos() {
		return this.todos.filter((todo) => todo.completed);
	}
	get unCompletedTodos() {
		return this.todos.filter((todo) => !todo.completed);
	}

	get completeTodosCount() {
		return this.todos.filter((todo) => todo.completed).length;
	}

	get unCompleteTodosCount() {
		return this.todos.filter((todo) => !todo.completed).length;
	}

	get totalTodosCount() {
		return this.todos.length;
	}
}
