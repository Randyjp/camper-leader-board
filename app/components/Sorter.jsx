import React from 'react';
import Board from 'Board';

export class Sorter extends React.Component {
  constructor (props) {
    super(props);
    this.handleValueChange = this.handleValueChange.bind(this);
  }
  handleValueChange (event) {
    const {apiCall} = this.props;
    apiCall.getCampers(this.type.value);
  }
  render () {
    return (
      <select onChange={this.handleValueChange} ref={(select) => this.type = select}>
        <option value='' disabled selected>Select a sorting option</option>
        <option value='recent'>Points in past 30 days</option>
        <option value='alltime'>All time points</option>
      </select>
    );
  }
}

Sorter.propTypes = {
  apiCall: React.PropTypes.object.isRequired
};

export default Sorter;
