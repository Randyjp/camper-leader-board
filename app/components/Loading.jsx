import React from 'react';
import Spinner  from 'react-spinkit';

export const Loading = props => {
  const {isLoading} = props;
  if (isLoading) {
    return (
      <div>
        <Spinner spinnerName="three-bounce" />
      </div>
    );
  }
  return null;
};

export default Loading;
