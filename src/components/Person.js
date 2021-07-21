import React from 'react';

class Person extends React.Component {
    clickSquare() {
        this.props.clickSquare(this.props.id);
    }

    render() {
        let aliveColor = this.props.newPerson ? "rgba(0,220,200,1)" : "rgba(0,100,100,1)";
        let backgroundColor = this.props.isAlive ? aliveColor : 'none';
        let squareStyle = {
            height: this.props.squareSize,
            width: this.props.squareSize,
            background: backgroundColor
        }
        return (
            <span onClick={this.clickSquare.bind(this)} className={"person"} style={squareStyle}> 

            </span>
        )
    }
}