import React, { Component } from "react";
import PropTypes from "prop-types";

import "./_card.scss";
class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static propTypes = {
        onClick: PropTypes.func,
        children: PropTypes.any,
        color: PropTypes.oneOf([
            "white",
            "red",
            "blue",
            "green",
            "purple",
            "orange"
        ]),
        fill: PropTypes.bool,
        light: PropTypes.bool
    };

    static defaultProps = {
        onClick: () => {},
        color: undefined,
        fill: false,
        light: false,
        glow: false
    };

    classNames() {
        let names = ["card"];

        switch (this.props.color) {
            case "white":
                names.push("is-white");
                break;
            case "red":
                names.push("is-red");
                break;
            case "blue":
                names.push("is-blue");
                break;
            case "green":
                names.push("is-green");
                break;
            case "purple":
                names.push("is-purple");
                break;
            case "orange":
                names.push("is-orange");
                break;
            default:
                break;
        }

        if (this.props.fill) {
            names.push("fill");
        }

        if (this.props.light) {
            names.push("is-light");
        }

        if (this.props.glow) {
            names.push("has-glow");
        }

        return names.join(" ");
    }

    render() {
        const { children, onClick } = this.props;
        return (
            <div className={this.classNames()} onClick={onClick}>
                <div className="card-body">{children}</div>
            </div>
        );
    }
}

export default Card;
