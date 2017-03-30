import React from 'react';

export class Camper extends React.Component {
  render() {
    var {username, img, alltime, recent, lastUpdate} = this.props;

    var renderImage = (img, username) => {
      return (
        <img alt={username} src={img} height='45px' width='45px'/>
      );
    };

    return (
      <tr>
         <td>{renderImage(img, username)}</td>
         <td>{username}</td>
         <td>{recent}</td>
         <td>{alltime}</td>
      </tr>
    );
  }
}

export default Camper;
