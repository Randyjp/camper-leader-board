import React from 'react';
import ReactDom from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jQuery';

import CamperList from 'CamperList';
import Camper from 'Camper';

describe('CamperList', () => {
  it('should exist', () => {
    expect(CamperList).toExist();
  });

  it('should render all Campers', () => {
    let campers = [
      {
      "username": "forkerino",
      "img": "https://avatars.githubusercontent.com/u/16620061?v=3",
      "alltime": 1244,
      "recent": 545,
      "lastUpdate": "2017-03-17T17:49:58.192Z"
      },
      {
      "username": "Manish-Giri",
      "img": "https://avatars1.githubusercontent.com/u/11348778?v=3",
      "alltime": 4636,
      "recent": 510,
      "lastUpdate": "2017-03-29T02:43:27.537Z"
      },
    ];

    let camperList = TestUtils.renderIntoDocument(<CamperList campers={campers}/>);
    let camperComponents = TestUtils.scryRenderedComponentsWithType(camperList, Camper);

    expect(camperComponents.length).toEqual(2);
  });
});
