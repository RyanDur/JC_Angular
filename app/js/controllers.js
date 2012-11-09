'use strict';

/* Controllers */


function VolunteersCtrl($scope, Volunteer) {
    $scope.volunteers = Volunteer.query();
}
