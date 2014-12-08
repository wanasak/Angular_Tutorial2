var app = angular.module('app', ['ngRoute']);

app.controller('MainController', function($scope, $routeParams){
	console.log($routeParams)
	$scope.somedata = $routeParams.myparam
})
// Can include query string
app.config(function($routeProvider){
	$routeProvider
	.when('/', {templateUrl: 'view.html'})
	.when('/test/:myparam', {templateUrl: 'view2.html'})
	// .when('/test/:myparam/:myparam2', {templateUrl: 'view2.html'})
	.otherwise({template: 'Couldn\'t match a route'})	
})