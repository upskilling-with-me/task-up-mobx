import { makeObservable, observable } from "mobx";

export class Todo {
	id = Math.floor(Math.random() * 1000 + 1);
	title = "";
	completed = false;

	constructor(title: string) {
		makeObservable(this, {
			title: observable,
			completed: observable,
		});
		this.title = title;
	}
}
