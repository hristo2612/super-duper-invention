import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Players } from '../imports/api/players';

Meteor.startup(()=>{
    console.log("A client was started!");
    Tracker.autorun(()=>{
        let title = "-| Score Keep |-";
        let jsx = (
            <div>
                <h1>{title}</h1>
            </div>
        );
        ReactDOM.render(jsx, document.getElementById('app'));
    });
});


