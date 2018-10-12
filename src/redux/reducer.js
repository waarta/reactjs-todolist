import { combineReducers } from "redux";

const todos = function(
	state = [{ id: 1, text: "todo default", completed: false }],
	action
) {
	if (action.type === "add_todo") {
		return [
			...state,
			{
				text: action.text,
				completed: false
			}
		];
	}
	if (action.type === "completed_todo") {
		return state.map(
			todo =>
				todo.text === action.text
					? { ...todo, completed: !todo.completed }
					: todo
		);
	}
	return state;
};

export default combineReducers({ todos });
