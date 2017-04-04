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

  getCampers (type) {
    CamperAPI.getCampers(type).then((data) => {
      this.setState({
        camperArray: data
      });
    }, (e)=> {
      console.log(e);
    });
  }

  render() {
    const {camperArray} = this.state;

    return (
      <div>
        <h1 className="page-title">Leader Board</h1>
        <div className='row'>
          <div className='column small-centered small-11 medium-10 large-9'>
            <div className='container'>
              <Sorter apiCall={this}/>
              <CamperList campers={camperArray}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
