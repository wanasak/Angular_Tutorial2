var app = angular.module('app', []);

app.controller('MainController', function($scope){
	$scope.photo = {
		url: "http://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Core_Image_icon.png/96px-Core_Image_icon.png",
		date: "October 12, 2014"
	}
})

app.directive('oldphoto', function(){
	return{
		restrict: 'AECM',
		template: '<figure><img width="500px"/><figcaption/></figure>',
		replace: true,
		link: function(scope,element,attrs){
			attrs.$observe('caption',function(value){
				element.find('figcaption').text(value)
			})
			attrs.$observe('photoSrc',function(value){
				element.find('img').attr('src',value)
			})
		}
	}
})

app.directive('photo', function(){
	return{
		restrict: 'E',
		templateUrl: 'photo.html',
		replace: true,
		scope: {
			//capstring="{{photo.date}}"
			caption: '@capstring', 
			//photo-src="photo.url" 
			photoSrc: '='  
		}
	}
})