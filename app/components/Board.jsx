import React from 'react';

import CamperList from 'CamperList';
import CamperAPI from 'CamperAPI';

export class Board extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      camperArray: []
    }
  }

  componentDidMount () {
    this.getCampers();
  }

  getCampers (type = "recent") {
    CamperAPI.getCampers('recent').then((data) => {
      this.setState({
        camperArray: data
      });
    }, (e)=> {
      console.log(e);
    });
  }

  render() {
    var {camperArray} = this.state;

    return (
      <div>
        <h1>Leader Board</h1>
        <CamperList campers={camperArray}/>
      </div>
    );
  }
}

export default Board;
