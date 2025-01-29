import { makeObservable, observable, action } from "mobx";

export class Todo {
	id = Math.floor(Math.random() * 1000 + 1);
	title = "";
	completed = false;

	constructor(title: string) {
		makeObservable(this, {
			title: observable,
			completed: observable,
			toggle: action,
		});
		this.title = title;
	}

	toggle() {
		this.completed = !this.completed;
	}
}
