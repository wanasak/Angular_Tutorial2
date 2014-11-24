//angular.module('app', []);

//var MainController = function($scope){
	//$scope.val = 'test123';
//}

var app = angular.module('app',[]);
app.controller('MainController', function($scope){
	$scope.val = 'test456';
});

//dependency
/*var app = angular.module('app', ['controllers']);
angular.module('controllers',[]).controller('MainController', function($scope){
	$scope.val = 'test789';
});*/
