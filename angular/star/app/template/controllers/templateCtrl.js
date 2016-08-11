angular.module('myApp.template')
	.controller('templateCtrl', ['$scope','minus',function($scope,minus) {
		$scope.myText="template";
		$scope.names = ["Emil", "Tobias", "Linus"];
		$scope.fn = function(){
			return $scope.myText + "myText" ;
		};
		$scope.xxx=10;
		$scope.fn2 = function(){
			return minus.myFn($scope.xxx);
		}
	}]);