import React from 'react';

export class Camper extends React.Component {
  render() {
    var {username, img, alltime, recent, lastUpdate} = this.props;

    return (
      <tr>
         <td><img alt={username} src={img} height='45px' width='45px'/></td>
         <td>{username}</td>
         <td>{recent}</td>
         <td>{alltime}</td>
      </tr>
    );
  }
}

Camper.propTypes = {
  username: React.PropTypes.string.isRequired,
  img: React.PropTypes.string.isRequired,
  alltime: React.PropTypes.number.isRequired,
  recent: React.PropTypes.number.isRequired,
  lastUpdate: React.PropTypes.string
};

export default Camper;
