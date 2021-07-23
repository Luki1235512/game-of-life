import React from 'react';
import'./css/TopPanel.css';

class TopPanel extends React.Component {
    
    pauseGame() {
        this.props.pauseGame()
    }

    runGame() {
        if (this.props.aliveCount > 0) {
            this.props.runGame()
        }
    }

    clearBoard() {
        this.props.clearGame(true)
    }

    render() {
        let panelWidth = {
            width: this.props.width
        }


        return (
            <div style={panelWidth} className="top-controls">
                <button className="control-button" onClick={this.runGame.bind(this)}>Run</button>
                <button className="control-button" onClick={this.pauseGame.bind(this)}>Pause</button>
                <button className="control-button" onClick={this.clearBoard.bind(this)}>Clear</button>
                <div className="generations">Generations: {this.props.generations}</div>
            </div>
        )


    }

}

export default TopPanel