import React from 'react';

import CamperList from 'CamperList';
import CamperAPI from 'CamperAPI';
import Sorter from 'Sorter';

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
    CamperAPI.getCampers(type).then((data) => {
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
        <Sorter apiCall={this}/>
        <CamperList campers={camperArray}/>
      </div>
    );
  }
}

export default Board;
