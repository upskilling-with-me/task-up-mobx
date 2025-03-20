import "./App.css";
import { TodoBoard } from "./components/TodoBoard";
import { TodoListProvider } from "./stores/TodoListContext";

const App = () => {
	return (
		<div className="container">
			<TodoListProvider>
				<TodoBoard />
			</TodoListProvider>
		</div>
	);
};

export default App;
