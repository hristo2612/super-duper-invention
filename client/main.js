import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Players } from '../imports/api/players';
import TitleBar from './../imports/ui/TitleBar';
import AddPlayer from './../imports/ui/AddPlayer';

const renderPlayers = (playersArray) => {
    return playersArray.map((player) => {
        return (
            <p key={player._id}>
                {player.name} has {player.score} point(s).
                <button onClick={() => Players.update( { _id: player._id }, { $inc: {score: 1} } )}>+1</button>
                <button onClick={() => Players.update( { _id: player._id }, { $inc: {score: -1} } )}>-1</button>
                <button onClick={() => Players.remove( { _id: player._id } )}>X</button>
            </p>
        );
    });
}

const submitPlayer = (e) => {
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

Meteor.startup(()=>{
    Tracker.autorun(()=>{
        let title = "Score Keep";
        let players = Players.find().fetch();
        let jsx = (
            <div>
                <TitleBar title={title}/>
                <AddPlayer/>
                {renderPlayers(players)}
                <form onSubmit={submitPlayer}>
                    <input type="text" name="playerName" placeholder="Player Name" />
                    <button>Add Player</button>
                </form>
            </div>
        );
        ReactDOM.render(jsx, document.getElementById('app'));
    });
});


