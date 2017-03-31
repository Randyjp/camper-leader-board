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

export default Camper;
