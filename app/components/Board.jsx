import React from 'react';

import CamperList from 'CamperList';

export class Board extends React.Component {
  render() {
    return (
      <div>
        <h1>Leader Board</h1>
        <CamperList/>
      </div>
    );
  }
}

export default Board;
