import React from 'react';
import ReactDom from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jQuery';

import Board from 'Board';

describe('Board', () => {
  it('should exist', () => {
    expect(Board).toExist();
  });

  it('should start with empy camperArray', () => {
    let board = TestUtils.renderIntoDocument(<Board/>);
    expect(board.state.camperArray.length).toEqual(0);
  });
});
