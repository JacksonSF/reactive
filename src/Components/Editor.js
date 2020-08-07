import React from 'react';
import './Editor.css';
import PropertyEditor from './PropertyEditor'


class Editor extends React.Component {
	constructor(props) {
		super(props);
		this.state = { };
	}
	onStartResize(e) {
		this.setState({ x: e.screenX + "px" });
	}
	onEndResize(e) {
		console.log(this.state.x);
		this.setState({ x: e.screenX + "px" });
	}


	render() {
		const { } = this.state;
		return (
			<div className="editor">
				<div className="componentsList" ></div>
				<div className="viewer" ></div>
				<PropertyEditor/>
			</div>
		)
	}
}

export default Editor;