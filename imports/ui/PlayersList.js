import React from 'react';
import PropTypes from 'prop-types';
import Player from './Player';
import FlipMove from 'react-flip-move';

export default class PlayersList extends React.Component {
    renderPlayers( players ) {
        if ( players.length === 0 ) {
            return ( 
                <div className="item">
                    <p className="item__message">Add your first player to get started..</p>
                </div>
             );
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
                <FlipMove maintainContainerHeight={true}>
                    {this.renderPlayers( this.props.players )}
                </FlipMove>
            </div>
        );
    }
}

PlayersList.propTypes = {
    players: PropTypes.array.isRequired
}