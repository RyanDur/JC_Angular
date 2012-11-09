'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('my app', function() {

  beforeEach(function() {
    browser().navigateTo('../../app/index.html');
  });


  it('should have a list of 190 volunteers.', function() {
      expect(repeater('ul li').count()).toEqual(190);
  });

  it('should filter by name and return 1 volunteer', function() {
      input('query').enter('Kory Kraft');
      expect(repeater('ul li').count()).toEqual(1);
   });
});
