import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

/* API's */
import { Players, calcPlayerPos } from '../imports/api/players';

/* UI's */
import App from './../imports/ui/App';

Meteor.startup(()=>{
    Tracker.autorun(()=>{
        let title = "Score Keep";
        let players = calcPlayerPos(Players.find({}, {sort: {score: -1}}).fetch());
        ReactDOM.render(<App title={title} players={players}/>, document.getElementById('app'));
    });
});