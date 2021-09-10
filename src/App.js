import React, { useState } from 'react';
import Board from './components/board';
import Snake from './components/snake';
import Ladder from './components/ladder';
import EventObj from './Util/Events';
import dice from './assets/dice.png';

import './style.css';

const USER_1 = 1;
const USER_2 = 2;

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.users = [];
    this.users[ USER_1 ] = { position: 1 };
    this.users[ USER_2 ] = { position: 1 };

    this.ladderIndex = {};
    this.ladderIndex[10] = 66;

    this.snakeIndex = {};
    this.snakeIndex[70] = 27;

    this.lastUser = USER_2;

  }

  componentDidMount() {
    const payloadArr = [
      {
        addBlockId: 1,
        addUserId: 1
      },
      {
        addBlockId: 1,
        addUserId: 2
      }
    ];

    payloadArr.map((payload, index) => {

      setTimeout(() => {
        EventObj.publish('MOVE_USER', payload);
      }, 1000);

    });
    

  }

  rollDice = () => {

    const ROTATED_USER = this.lastUser === USER_1 ? USER_2 : USER_1;
    const oldPosition = this.users[ROTATED_USER].position;
    const randomNo = Math.floor(Math.random() * 5) + 1;

    /*uncomment this line and comment out the next one to move the position one by one to see 
    how the snake and ladder are affecting the moves */

    //let newPosition = oldPosition + 1;

    let newPosition = oldPosition + randomNo;

    if( this.ladderIndex[newPosition] ) {
      newPosition = this.ladderIndex[newPosition];
    }

    if( this.snakeIndex[newPosition] ) {
      newPosition = this.snakeIndex[newPosition];
    }

    this.users[ROTATED_USER] = {
      position: newPosition <= 90 ? newPosition : 90
    }

    const payload = {
      addBlockId: newPosition,
      addUserId: ROTATED_USER,
      removeUserId: ROTATED_USER,
      removeBlockId: oldPosition
    };

    //Remove the reference to the previous user
    this.lastUser = ROTATED_USER;


    EventObj.publish('MOVE_USER', payload);
  };

  render() {
    

    return (
      <div>
        <h1>Snake and Ladder</h1>
        <div className="dice">
          <img src={dice} onClick={() => this.rollDice()} width="80" />
          [ Click the dice to move the user ]
        </div>
        <div id="snake-and-board-game">
          {/** Set up the game */}
          <Board />
          <Snake />
          <Ladder />
        </div>
      </div>
    );
  }
}

export default App;
