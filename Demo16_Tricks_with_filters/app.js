var app = angular.module('app', []);

app.controller('MainController', function($scope){
	
	$scope.mydata = {arr:[
	{name:'jane',age:34},
	{name:'jake',age:56},
	{name:'joe',age:23},
	{name:'john',age:12}
	]}
})