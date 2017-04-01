import React from 'react';
import Camper from 'Camper';

export const CamperList = props => {
  const {campers} = props;

  return (
    <div>
      {renderCampersTable(campers)}
    </div>
  );
};

CamperList.propTypes = {
  campers: React.PropTypes.array.isRequired
};

const renderCampersTable = (campers) => {
  if (campers.length ===0 ){
    // TODO: make a nice empty placeholder
    return (
      <p>nothing here</p>
    );
  }

  const finalCampers = campers.map((camper) => {
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

export default CamperList;
