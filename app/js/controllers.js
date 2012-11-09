'use strict';

/* Controllers */


function VolunteersCtrl($scope, $http) {
    var volunteer_url = "/app/volunteers.json"
    function init() {
        $http({method:'GET', url:volunteer_url}).success(function(data){
            $scope.volunteers = data;
        });
    }

	// $scope.search = {};
	// 	$scope.search.languages = [{name: 'C#', search_value: 'C Sharp', checked: false},
	// 							   {name: 'PHP', search_value: 'PHP', checked: false}];
    
    init();
}
