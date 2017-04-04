import React from 'react';

import CamperList from 'CamperList';
import CamperAPI from 'CamperAPI';
import Sorter from 'Sorter';
import Loading from 'Loading';

export class Board extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      camperArray: [],
      isLoading: false
    }
  }

  componentDidMount () {
    this.getCampers();
  }

  getCampers (type) {
    if (!type) return;
    
    this.setState({
      isLoading: true
    });
    CamperAPI.getCampers(type).then((data) => {
      this.setState({
        camperArray: data,
        isLoading: false
      });
    }, (e)=> {
      this.setState({
        camperArray: [],
        isLoading: false
      });
    });
  }

  render() {
    const {camperArray, isLoading} = this.state;

    return (
      <div>
        <h1 className="page-title">Leader Board</h1>
        <div className='row'>
          <div className='column small-centered small-11 medium-10 large-9'>
            <div className='container'>
              <Sorter apiCall={this}/>
              <Loading isLoading={isLoading}/>
              <CamperList campers={camperArray}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
