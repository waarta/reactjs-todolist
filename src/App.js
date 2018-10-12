import React, { Component } from "react";
import logo from "./logo.svg";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import "./App.css";
import reducer from "./reducers";

const middleware = [];

if (ProcessingInstruction.env.NODE_ENV !== "production")
	middleware.push(createLogger());

const store = createStore(reducer, applyMiddleware(...middleware));

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App" />
			</Provider>
		);
	}
}

export default App;
