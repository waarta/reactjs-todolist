import React, { Component } from "react";

class AddTodo extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.getText = element => {
			this.text = element;
		};
	}

	handleClick(e) {
		if (this.text.value !== "") {
			this.props.add_todo(this.text.value);
			this.text.value = "";
		}
	}

	render() {
		return (
			<div>
				<input ref={this.getText} />
				<button onClick={this.handleClick}>add</button>
			</div>
		);
	}
}

export default AddTodo;
