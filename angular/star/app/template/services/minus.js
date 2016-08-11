angular.module('myApp.template')
	.service('minus',function(){
		this.myFn = function(x) {
			return parseInt(x)-1;
		}
	});