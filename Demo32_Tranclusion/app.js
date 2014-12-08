var app = angular.module('app', []);

app.controller('MainController', function($scope){

})

app.directive('foo', function(){
	return{
		restrict: 'E',
		transclude: true, //insert directive instead replace all with ng-transclude
		template: '<div>This is the template content!<div ng-transclude /><div>'
	}
})