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
  if (campers.length === 0){
    // TODO: make a nice empty placeholder
    return (
      <div className="callout warning">
        <h5>No campers at the moment</h5>
        <p>Please select one of the options on top to get some useful information.</p>
      </div>
    );
  }

  const finalCampers = campers.map((camper) => {
    return (
      <Camper key={camper.username} {...camper}/>
    );
  });

  return (
    <table className='hover'>
      <thead>
        <tr>
          <th></th>
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
