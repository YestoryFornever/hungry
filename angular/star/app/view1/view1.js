'use strict';

angular.module('myApp.view1', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('view1', {
			url: "/view1",
			views: {
				"": { templateUrl: "view1/view1.html" },
				"xxx": { template: "view1.xxx" }
			},
			controller:'View1Ctrl'
		});
}])

.controller('View1Ctrl', ['$scope',function($scope) {
	$scope.xxx="xxx";
}]);