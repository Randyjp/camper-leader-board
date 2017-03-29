import React from 'react';

import CamperList from 'CamperList';

export class Board extends React.Component {
  render() {
    var camperArray = [
        // {
        // "username": "forkerino",
        // "img": "https://avatars.githubusercontent.com/u/16620061?v=3",
        // "alltime": 1244,
        // "recent": 545,
        // "lastUpdate": "2017-03-17T17:49:58.192Z"
        // },
        // {
        // "username": "Manish-Giri",
        // "img": "https://avatars1.githubusercontent.com/u/11348778?v=3",
        // "alltime": 4618,
        // "recent": 520,
        // "lastUpdate": "2017-03-27T19:47:21.776Z"
        // }
      ];
    return (
      <div>
        <h1>Leader Board</h1>
        <CamperList campers={camperArray}/>
      </div>
    );
  }
}

export default Board;
