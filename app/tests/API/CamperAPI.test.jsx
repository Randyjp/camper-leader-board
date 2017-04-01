import expect from 'expect';

import CamperAPI from 'CamperAPI';

describe('API', () => {
  it('should exist', () => {
    expect(CamperAPI).toExist();
  });

  it('should retrive campers from the API', (done) => {
      let campers = [];

      CamperAPI.getCampers('recent').then((data) => {
        campers = data;
        expect(campers.length).toBeGreaterThan(0);
        done();
      }, (e)=> {
        done(new Error("This is a sample failing async test"));
      });
  });
});
