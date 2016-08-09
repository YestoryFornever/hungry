'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
	'ui.router',
	'myApp.view1',
	'myApp.view2',
	'myApp.template',
	'myApp.version'
])

.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('');
	$stateProvider
		.state('contacts', {//Á´½Ó:index.html#/contacts
			url: "/contacts",
			template: '<h1>My Contacts</h1>'
		});
}]);
