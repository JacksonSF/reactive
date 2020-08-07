import React from 'react';
import './SideBar.css';

class SideBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = { x: "400px", mousePos: 0 };
    }

	onStartResize(e) {
		this.setState({ x: e.screenX + "px" });
    }

	onEndResize(e) {
		console.log(this.state.x);
		this.setState({ x: e.screenX + "px" });
    }

	render() {
        const { x } = this.state;

        var compStyle;

        switch (this.props.resizeHendle) {
            case "left":
                compStyle = "resizeHandle "
                break;
            case "right":
                compStyle = "resizeHandle floatRight"
                break;
            default:
                break;
        }
		return (
			<div style={{ width: this.state.x }} className="sideBar">
					<div className={compStyle} onDrag={this.onStartResize.bind(this)} onDragEnd={this.onEndResize.bind(this)}>
					</div>
			</div>
		)
	}
}

export default SideBar;