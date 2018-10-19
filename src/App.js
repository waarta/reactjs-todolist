import React, { Component } from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import "./App.css";
import reducer from "./redux/reducer";
import TodoList from "./components/TodoList";

const middleware = [];

if (process.env.NODE_ENV !== "production") middleware.push(createLogger());

const defaultState = [{ text: "todo default", completed: false }];

let localTodos = JSON.parse(localStorage.getItem("todos"));
if (localTodos == null) localTodos = defaultState;
const store = createStore(
	reducer,
	{ todos: localTodos },
	applyMiddleware(...middleware)
);
store.subscribe(() => {
	localStorage.setItem("todos", JSON.stringify(store.getState().todos));
});

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<TodoList />
				</div>
			</Provider>
		);
	}
}

export default App;
