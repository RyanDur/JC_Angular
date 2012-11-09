'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('volunteerServices', ['ngResource']).
    factory('Volunteer', function($resource){
   return $resource('app/:volunteers.json', {}, {
       query: {method:'GET', isArray:true}
});
});


