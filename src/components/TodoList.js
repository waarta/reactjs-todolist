import React, { Component } from "react";
import Todo from "./Todo";
import { connect } from "react-redux";
import AddTodo from "./AddTodo";

class TodoList extends Component {
	render() {
		return (
			<div>
				<AddTodo add_todo={this.props.add_todo.bind(this)} />
				<div>
					{this.props.todos.map((todo, i) => (
						<Todo
							completed_todo={this.props.completed_todo.bind(this)}
							key={i}
							{...todo}
						/>
					))}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	todos: state.todos
});
const mapDispatchToProps = dispatch => ({
	completed_todo: text =>
		dispatch({
			type: "completed_todo",
			text
		}),
	add_todo: text =>
		dispatch({
			type: "add_todo",
			text
		})
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList);
