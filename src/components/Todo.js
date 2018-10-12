import React, { Component } from "react";

class Todo extends Component {
	handleClick(e) {
		this.props.completed_todo(this.props.text);
	}

	render() {
		return (
			<div>
				<p>
					{this.props.text} - {this.props.completed ? "fait" : "A faire"}
					<button onClick={this.handleClick.bind(this)}>
						{this.props.completed ? "fait" : "A faire"}
					</button>
				</p>
			</div>
		);
	}
}

export default Todo;
