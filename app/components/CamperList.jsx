import React from 'react';
import Camper from 'Camper';

export class CamperList extends React.Component {
  render() {
    const {campers} = this.props;
    const renderCampersTable = () => {
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
          <thead>
            <tr>
              <th>Avatar</th>
              <th>Name</th>
              <th>Points in past 30 days</th>
              <th>All time Points</th>
            </tr>
          </thead>
          <tbody>
            {finalCampers}
          </tbody>
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

CamperList.propTypes = {
  campers: React.PropTypes.array.isRequired
};

export default CamperList;
