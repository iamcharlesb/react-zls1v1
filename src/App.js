import React, { useState } from 'react';
import Board from './components/board';
import Snake from './components/snake';
import Ladder from './components/ladder';
import User from './components/user';
import EventObj from './Util/Events';

import './style.css';

//Boundry where we need to place the snake and ladder
//snake & ladder
//button - random number generator for the movement of user
//Two Users

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      users: [{ user: 1, position: 0 }, { user: 2, position: 0 }],
      snake: [],
      ladder: [],
      lastUser: 0
    };
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
      EventObj.publish('MOVE_USER', payload);
    });
  }

  rollDice = () => {
    //const { users, lastUser } = this.state;
    //const rotateChance = lastUser > users.length ? 0 : lastUser++;

    /*this.setState({
      lastUser: rotateChance
    });*/

    EventObj.publish('MOVE_USER', { abc: 123 });
  };

  render() {
    const { users } = this.state;

    return (
      <div>
        <h1>Hello StackBlitz!</h1>
        <button className="dice" onClick={this.rollDice.bind(this)}>
          Roll Dice
        </button>
        <div id="snake-and-board-game">
          {/** Set up the game */}
          <Board />
          <Snake />
          <Ladder />

          {/** Setup the users <User type={index === 0 ? 'man' : 'woman'} />; */}
        </div>
      </div>
    );
  }
}

export default App;
