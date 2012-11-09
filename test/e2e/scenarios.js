'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('my app', function() {

  	beforeEach(function() {
    	browser().navigateTo('../../app/index.html');
  	});


  	it('should have a list of 190 volunteers.', function() {
      	expect(repeater('ul li').count()).toEqual(190);
  	});

	it('should filter by text Kory Kraft and return 1 volunteer', function() {
      	input('query').enter('Kory Kraft');
      	expect(repeater('.volunteers li').count()).toEqual(1);
	});

  	it('should filter by name Kory Kraft and return 1 volunteer', function() {
      	input('search.name').enter('Kory Kraft');
      	expect(repeater('.volunteers li').count()).toEqual(1);
	});
	
	it('should filter by company ThoughtWorks and return 2 volunteers', function() {
      	input('search.company').enter('ThoughtWorks');
      	expect(repeater('.volunteers li').count()).toEqual(2);
    });
	
	it('should filter by name Dan and company VMWare and return 1 volunteer', function() {
      	input('search.name').enter('Dan');
		input('search.company').enter('VMWare');
	    expect(repeater('.volunteers li').count()).toEqual(1);
   });
});
