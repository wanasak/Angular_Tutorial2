var app = angular.module('app', []);

app.controller('MainController', function($scope){

})

// Link for specific 
// Compile for all 
app.directive('row', function(){
	return{
		restrict: 'E',
		compile: function(tElement, atrrs){
			var content = angular.element('<div class="row"></div>')
			content.append(tElement.contents());
			tElement.replaceWith(content);
		}
	}
})

app.directive('column', function(){
	return{
		restrict: 'E',
		compile: function(tElement, atrrs){
			var content = angular.element('<div class="col"></div>')
			content.append(tElement.contents());
			tElement.replaceWith(content);
		}
	}
})