var app = angular.module('app', []);

app.controller('MainController', function($scope){
	$scope.foo = 0;
	$scope.val = '';
	
	$scope.update = function(){
		$scope.val = 'Updated'
	}
});
// Angular doesn't follow the jQuery click event
/* app.directive('clickable', function(){
	return{
		restrict: 'E',
		scope: { foo: '=' },
		template: '<button>{{foo}}</button>',
		link: function(scope, element, attrs){
			element.bind('click',function(){
				scope.foo++;
			})
		}
	}
}); */

//the $digest() keeps calling the watchers until no more listeners are firing
//you don't call $digest() directly in controllers or in directives. Instead, you should call $apply() (typically from within a directive), which will force a $digest()
app.directive('clickable', function(){
	return{
		restrict: 'E',
		scope: { foo: '=' },
		template: '<button>{{foo}}</button>',
		link: function(scope, element, attrs){
			element.bind('click',function(){
				scope.foo++;
				//not handle exception
				//scope.$apply();
				
				scope.$apply(function(){
					scope.foo++;
				})
			})
		}
	}
});