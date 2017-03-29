import React from 'react';

export class Camper extends React.Component {
  render() {
    var {username, img, alltime, recent, lastUpdate} = this.props;

    var renderImage = (img) => {
      return 'img';
    };

    return (
      <tr>
         <td>{renderImage(img)}</td>
         <td>{username}</td>
         <td>{recent}</td>
         <td>{alltime}</td>
      </tr>
    );
  }
}

export default Camper;
