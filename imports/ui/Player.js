import React from 'react';
import PropTypes from 'prop-types';
import {Players} from './../api/players';

export default class Player extends React.Component {
    render() {
        return (
            <div key={this.props.player._id} className="item">
                <div className="player">
                    <div>
                        <h3 className="player__name">{this.props.player.name}</h3>
                        <p className="player__stats">{this.props.player.score} point(s)</p>
                    </div>
                    <div className="player__actions">
                        <button onClick={() => Players.update( { _id: this.props.player._id }, { $inc: {score: 1} } )} className="button button--round">+1</button>
                        <button onClick={() => Players.update( { _id: this.props.player._id }, { $inc: {score: -1} } )} className="button button--round">-1</button>
                        <button onClick={() => Players.remove( { _id: this.props.player._id } )} className="button button--round">X</button>    
                    </div>
                </div>
            </div>
        );
    }
}

Player.propTypes = {
    player: PropTypes.object.isRequired
}