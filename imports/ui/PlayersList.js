import React from 'react';
import PropTypes from 'prop-types';
import Player from './Player';

export default class PlayersList extends React.Component {
    renderPlayers( players ) {
        if ( players.length === 0 ) {
            return ( <p>Add your first player to get started..</p> );
        } else {
            return players.map((player)=>{
                return (
                    <Player key={player._id} player={player}/>
                );
            });
        }
        
    }
    render() {
        return (
            <div>
                {this.renderPlayers( this.props.players )}
            </div>
        );
    }
}

PlayersList.propTypes = {
    players: PropTypes.array.isRequired
}