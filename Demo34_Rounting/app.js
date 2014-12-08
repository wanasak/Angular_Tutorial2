var app = angular.module('app', ['ngRoute']);

app.controller('MainController', function($scope){
	$scope.somedata = '12345!!!'
})

app.config(function($routeProvider){
	$routeProvider
	.when('/', {templateUrl: 'view.html'})
		// .when('/', {templateUrl: 'view.html', controller: 'MainController'})
})