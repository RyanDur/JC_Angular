'use strict';

/* Controllers */


function VolunteersCtrl($scope, $http) {
    var volunteer_url = "/app/volunteers.json"
    function init() {
        $http({method:'GET', url:volunteer_url}).success(function(data){
            $scope.volunteers = data;
        });
    }
    
    init();
}
