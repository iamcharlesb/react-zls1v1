import React, { useEffect, useState } from 'react';
import EventObj from '../../Util/Events';
import './style.css';
import User from '../user';

class Block extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
    this.blockId = props.blockId;
    this.className = props.className;

  }

  componentDidMount() {

    EventObj.subscribe('MOVE_USER', payload => {

      if (!payload) return null;

      const { addBlockId, addUserId, removeBlockId, removeUserId } = payload;
      const { users } = this.state;

      if (this.blockId === addBlockId) {
        this.setState({
          users: [...users, addUserId ]
        });
      }

      if (this.blockId === removeBlockId) {
        let newUserSet = users;
        let arr = newUserSet.filter(function(item) {
          return item !== removeUserId
        });

        this.setState({
          users: arr
        });

      }
      
    });
    
  }

  render() {

    const { users } = this.state;

    return (
      <div className={this.className}>

        {this.blockId}

        {users.map((userId, index) => {
            return <User type={userId === 1 ? 'man':'woman'}/>
          })
        }

      </div>
    );
  }

}

const Board = ({}) => {
  var arr = [];

  for (var loop = 88; loop > 0; loop--) {
    arr.push(
      <Block
        key={loop}
        className={loop % 2 === 0 ? 'bg-black' : 'bg-white'}
        blockId={loop}
      />
    );
  }

  return <div className="board--wrapper">{arr}</div>;
};

export default Board;
