import React from 'react';

export class Sorter extends React.Component {
  constructor (props) {
    super(props);
    this.handleValueChange = this.handleValueChange.bind(this);
  }
  handleValueChange (event) {
    var {apiCall} = this.props;
    apiCall.getCampers(this.type.value);
  }
  render () {
    return (
      <select onChange={this.handleValueChange} ref={(select) => this.type = select}>
        <option value='recent'>Points in past 30 days</option>
        <option value='alltime'>All time points</option>
      </select>
    );
  }
}

export default Sorter;
