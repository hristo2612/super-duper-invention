import React from 'react';
import PropTypes from 'prop-types';
import {Players} from './../api/players';

export default class AddPlayer extends React.Component {
    submitPlayer(e) {
        let playerName = e.target.playerName.value;
        e.preventDefault();

        if (playerName) {
            e.target.playerName.value = '';
            Players.insert({
                name: playerName,
                score: 0
            });
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submitPlayer}>
                    <input type="text" name="playerName" placeholder="Player Name" />
                    <button>Add Player</button>
                </form>
            </div>
        );
    }
}

AddPlayer.propTypes = {
    score: PropTypes.number
}

AddPlayer.defaultProps = {
    score: 0
}