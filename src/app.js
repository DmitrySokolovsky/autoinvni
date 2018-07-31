import ReactDom from 'react-dom';
import React from "react";
import "./style.scss";
import { MainView } from './view/MainView/main.view.jsx';
import * as firebase from 'firebase';

var config = {
    apiKey: 'AIzaSyDAMKCx_1PyATQVWXLIY_11azo3ZH8_hII',
    authDomain: 'autoivni.firebaseapp.com',
    databaseURL: 'https://autoivni.firebaseio.com',
    projectId: 'autoivni',
    storageBucket: 'autoivni.appspot.com',
    messagingSenderId: '649109603785'
};
firebase.initializeApp(config);

ReactDom.render(
    <MainView/>
    ,document.getElementById('test'));


               