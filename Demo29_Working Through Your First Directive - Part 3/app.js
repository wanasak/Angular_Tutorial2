var app = angular.module('app', []);

app.controller('MainController', function($scope){
	$scope.photo = {
		url: 'http://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Core_Image_icon.png/96px-Core_Image_icon.png',
		date: 'December 3rd, 2013'
	}
	$scope.callme = function(msg){
		console.log('You gave me: ' + msg)
	}
})

app.directive('photo', function(){
	return{
		restrict: 'E',
		templateUrl: 'photo.html',
		replace: true,
		scope: {
			caption: '@capstring',
			photoSrc: '=',
			localFunc: '&'
		},
		controller: function($scope){
			$scope.mydata = 'some data'
		}
	}
})