angular.module('myApp.template')
	.filter('add1',["minus",function(minus){
		return function(x){
			return parseInt(x)+1;
		}
	}])
	.filter('add2',["minus",function(minus){
		return function(x){
			return minus.myFn(parseInt(x)+1);
		}
	}]);