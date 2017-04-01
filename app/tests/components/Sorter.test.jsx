import React from 'react';
import ReactDom from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jQuery';

import Sorter from 'Sorter';

describe('Sorter', () => {
  it('should exist', () => {
    expect(Sorter).toExist();
  });

  // it('should call handleValueChange on value change', () => {
  //   let spy = expect.createSpy();
  //
  //   let sorter = TestUtils.renderIntoDocument(<Sorter apiCall={spy}/>);
  //   let el = $(ReactDom.findDOMNode(sorter));
  //   TestUtils.Simulate.change(el.find('select'));
  //
  //   expect(spy).toHaveBeenCalled();
  // });
});
