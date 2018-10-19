import React, { Component } from "react";

class Todo extends Component {
	handleClick(e) {
		this.props.completed_todo(this.props.text);
	}

	render() {
		return (
			<div>
				<p
					style={
						this.props.completed
							? { backgroundColor: "grey" }
							: { backgroundColor: "white" }
					}
				>
					{this.props.text}
					<button onClick={this.handleClick.bind(this)}>
						{this.props.completed ? "A faire" : "fait"}
					</button>
				</p>
			</div>
		);
	}
}

export default Todo;
