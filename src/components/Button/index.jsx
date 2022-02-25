import { Component } from "react";
import './index.css';

export class ButtonCustom extends Component {

    render() {
        return (
            <button disabled={this.props.disabled}  onClick={this.props.handleCustom} className="button-custom" >{this.props.title}</button>
        )
    }
}