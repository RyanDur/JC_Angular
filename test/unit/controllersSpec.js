'use strict';

/* jasmine specs for controllers go here */

describe('VolunteersCtrl', function(){

  it('should have 2 volunteers in the scope', function() {
      var scope = {},
      volunteersCtrl = new VolunteersCtrl(scope);
      expect(scope.volunteers.length).toBe(2);
  });
});



