import { makeObservable, observable, action, computed } from "mobx";
import type { Todo } from "../models/Todo";

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
	}

	addTodo(todo: Todo) {
		this.todos.push(todo);
	}

	deleteTodo(id: number) {
		this.todos = this.todos.filter((t) => t.id!== id);
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
