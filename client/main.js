import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Players } from '../imports/api/players';
import TitleBar from './../imports/ui/TitleBar';
import AddPlayer from './../imports/ui/AddPlayer';
import PlayersList from './../imports/ui/PlayersList';

Meteor.startup(()=>{
    Tracker.autorun(()=>{
        let title = "Score Keep";
        let score = 420;
        let players = Players.find().fetch();
        let jsx = (
            <div>
                <TitleBar title={title}/>
                <PlayersList players={players}/>
                <AddPlayer score={score}/>
            </div>
        );
        ReactDOM.render(jsx, document.getElementById('app'));
    });
});


