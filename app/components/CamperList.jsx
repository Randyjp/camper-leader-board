import React from 'react';
import Camper from 'Camper';

export class CamperList extends React.Component {
  render() {
    var {campers} = this.props;
    var renderCampersTable = () => {
      if (campers.length ===0 ){
        // TODO: make a nice empty placeholder
        return (
          <p>nothing here</p>
        );
      }

      var finalCampers = campers.map((camper) => {
        return (
          <Camper key={camper.username} {...camper}/>
        );
      });

      return (
        <table>
        <tr>
          <th>Avatar</th>
          <th>Name</th>
          <th>Points in past 30 days</th>
          <th>All time Points</th>
        </tr>
          {finalCampers}
        </table>
      );

    };

    return (
      <div>
        {renderCampersTable()}
      </div>
    );
  }
}

export default CamperList;
