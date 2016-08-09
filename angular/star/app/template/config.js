'use strict';

angular.module('myApp.template', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('template', {
			url: "/template",
			views: {
				"": { templateUrl: "template/template.html" },
				"xxx": { template: "template.xxx" }
			},
			controller:'templateCtrl'
		});
}]);