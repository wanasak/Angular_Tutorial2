var app = angular.module('app', []);

app.controller('MainController', function($scope, $rootScope){
	$rootScope.$on('myEvent', function(event, src) { console.log('Main sees myEvent from', src) })
	
	// Dispatches an event name downwards to all child scopes (and their children) notifying the registered $rootScope.Scope listeners
	$scope.broadClick = function(original) { $rootScope.$broadcast('myEvent',original) }
	// Dispatches an event name upwards through the scope hierarchy notifying the registered $rootScope.Scope listeners
	$scope.emitClick = function(original) { $rootScope.$emit('myEvent',original) }
})

app.controller('MiddleController', function($scope){
	$scope.$on('myEvent', function(event, src) { console.log('Middle sees myEvent from', src) })
		
	$scope.broadClick = function(original) { $scope.$broadcast('myEvent',original) }
	$scope.emitClick = function(original) { $scope.$emit('myEvent',original) }
})

app.controller('BottomController', function($scope){
	$scope.$on('myEvent', function(event, src) { console.log('Bottom sees myEvent from', src) })
		
	$scope.broadClick = function(original) { $scope.$broadcast('myEvent',original) }
	$scope.emitClick = function(original) { $scope.$emit('myEvent',original) }
})



