import React from 'react';

export class Camper extends React.Component {
  render() {
    const {username, img, alltime, recent, lastUpdate} = this.props;
    const profileUrl = `https://www.freecodecamp.com/${username}`;

    return (
      <tr>
         <td><a href={profileUrl} target='_blank'><img alt={username} src={img} height='45px' width='45px'/></a></td>
         <td><a href={profileUrl} target='_blank'>{username}</a></td>
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
