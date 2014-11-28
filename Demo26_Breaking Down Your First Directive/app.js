var app = angular.module('app', []);

app.controller('MainController', function($scope){
	$scope.photo = {
		url: "http://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Core_Image_icon.png/96px-Core_Image_icon.png",
		date: "January 1, 2014"
	}
})

/* app.directive('photo', function(){
	return{
		restrict: 'E',
		template: '<figure><img width="500px" /><figcaption/></figure>',
		replace: true,
		link: function(scope,element,atrrs){
			atrrs.$observe('caption',function(value){
				element.find('figcaption').text(value)
			})
			atrrs.$observe('photoSrc',function(value){
				element.find('img').attr('src',value)
			})
		}
	}
}) */

app.directive('photo', function(){
	return{
		restrict: 'E',
		template: '<figure>'+
					'<img width="500px" ng-src="{{photoSrc}}" />'+
					'<figcaption>{{caption}}</figcaption>'+
				  '</figure>',
		replace: true,
		scope: {
			caption: '@',
			photoSrc: '@'
		}
	}
})








