import React, { useEffect, useState } from 'react';
import EventObj from '../../Util/Events';
import './style.css';
import User from '../user';

const Block = ({ className, blockId }) => {
  let users = {};

  useEffect(() => {
    EventObj.subscribe('MOVE_USER', payload => {
      if (!payload) return null;

      const { addBlockId, addUserId, removeBlockId, removeUserId } = payload;

      if (blockId === addBlockId) {
        console.log('Payload -', payload);
      }

      if (blockId === addBlockId) {
        users[addUserId] = addUserId; //payload['UserComp'] || '';
      }

      if (blockId === removeBlockId) {
        delete users[removeUserId];
      }
    });
  });

  return (
    <div className={className}>
      {blockId}
      {Object.keys(users).map((UserInfo, index) => {
        return <div>123</div>;
      })}
    </div>
  );
};

const Board = ({}) => {
  var arr = [];

  for (var loop = 90; loop > 0; loop--) {
    arr.push(
      <Block
        key={loop}
        className={loop % 2 === 0 ? 'bg-black' : 'bg-white'}
        blockId={loop}
      />
    );
  }

  //Snake - 30 - 90
  //ladder 41 - 95

  return <div className="board--wrapper">{arr}</div>;
};

export default Board;
