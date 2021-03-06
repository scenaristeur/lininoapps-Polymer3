/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
//import "@polymer/paper-button/paper-button.js"
/*import '../../js/client'*/
/*
import * as io from 'socket.io-client/dist/socket.io';

const socket = io('http://localhost:3000');

console.log('init');

socket.on('connect', onConnect);

function onConnect(){
  console.log('connect ' + socket.id);
}*/


/*import ioClient from 'socket.io-client'

let io = ioClient('http://your-host')*/
/*import 'socket.io';

const socket = io('http://localhost');
console.log(socket);*/

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

class MyView4 extends PageViewElement {
  _render(props) {
    return html`
      ${SharedStyles}
      <style>
      * {
    font-family: sans-serif;
    font-size: 14px;
}

html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}

div {
    -webkit-user-select: none; /* webkit (safari, chrome) browsers */
    -moz-user-select: none; /* mozilla browsers */
    -khtml-user-select: none; /* webkit (konqueror) browsers */
    -ms-user-select: none; /* IE10+ */
}


.chatbox {
    display: none;
    width: 300px;
    height: 320px;
    background: rgba(255, 255, 255, 0.7);
    bottom: 5px;
    left: 5px;
    border-radius: 5px;
    pointer-events: none;
    border: 1px solid #CCC;
    margin: 10px;
    box-shadow: 1px 1px 2px rgba(0,0,0,0.1);
}

.chatbox .chat-list {
    padding: 5px;
    margin: 0;
    list-style: none;
    box-sizing: border-box;
    height: 285px;
    overflow: hidden;
}

.chatbox .chat-list li {
    padding: 2px;
    margin: 3px;
}

.chatbox .chat-list li.me b {
    color: #ea6153;
}

.chatbox .chat-list li.friend b {
    color: #2ecc71;
}

.chatbox .chat-list li.system {
    color: #777;
    font-style: italic;
}

.chatbox .chat-list li.system:before {
    content: "* ";
}

.chatbox .chat-input {
    pointer-events: all;
    box-sizing: border-box;
    width: 100%;
    padding: 8px;
    background: transparent;
    border: none;
    border-top: 1px solid #DDD;
    outline: none;
}

#startMenu {
    -webkit-transition: max-height 1s;
    -moz-transition: max-height 1s;
    -ms-transition: max-height 1s;
    -o-transition: max-height 1s;
    transition: max-height 1s;
    overflow: hidden;

    position: relative;
    margin: 100px auto auto;
    width: 350px;
    padding: 20px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    background-color: white;
    box-sizing: border-box;
}

#startMenu p {
    padding: 0;
    text-align: center;
    font-size: x-large;
    font-weight: bold;
}

#userNameInput {
    width: 100%;
    text-align: center;
    padding: 10px;
    border: solid 1px #dcdcdc;
    transition: box-shadow 0.3s, border 0.3s;
    box-sizing: border-box;
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    margin-bottom: 10px;
    outline: none;
}

#userNameInput:focus, #userNameInput.focus {
    border: solid 1px #CCCCCC;
    box-shadow: 0 0 3px 1px #DDDDDD;
}

#startButton, #spectateButton {
    position: relative;
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    font-size: large;
    color: white;
    text-align: center;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
    background: #2ecc71;
    border: 0;
    border-bottom: 2px solid #28be68;
    cursor: pointer;
    -webkit-box-shadow: inset 0 -2px #28be68;
    box-shadow: inset 0 -2px #28be68;
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    margin: 10px auto;
}

#startButton:active, #startButton:hover {
    top: 1px;
    background: #55D88B;
    outline: none;
    -webkit-box-shadow: none;
    box-shadow: none;
}


#startMenu ul {
    padding: 10px;
    margin: 0 10px 10px;
}

#startMenu .input-error {
    color: red;
    opacity: 0;
    font-size : 12px;
}
</style>
      <section>
        <h2>Oops! You hit a 404  ou pas</h2>
        <p>The page you're looking for doesn't seem to exist. Head back
           <a href="/">home</a> and try again?
        </p>
        <div class="chatbox" id="chatbox">
       <ul id="chatList" class="chat-list"></ul>
       <input id="chatInput" type="text" class="chat-input" placeholder="Chat here..." maxlength="35" />
   </div>
   <div id="startMenu">
       <input type="text" tabindex="0" autofocus placeholder="Enter your name here" id="userNameInput" maxlength="25" />
       <b class="input-error">Nick must be alphanumeric characters only!</b>
        <paper-input always-float-label label="Floating label">Paper input</paper-input>
          <paper-button  raised >Paper btn</paper-button>
       <br />
       <a><!--<paper-button id="startButton">Chat</button-paper>-->
       <button id="startButton" on-click="${() => this._onStart()}" title="Add 1">Chat</button></a>
   </div>
<!--<script type="text/javascript" src="js/client.js"></script>-->
      </section>
    `
  }
  _onStart() {
console.log("start");
    this.value++;
    this.clicks++;

  //  this.dispatchEvent(new CustomEvent('counter-incremented'));
  }
}

window.customElements.define('my-view4', MyView4);
