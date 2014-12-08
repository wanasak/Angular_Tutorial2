var app = angular.module('app', []);

app.controller('MainController', function($scope){

})

//Use 'this' instead scope
app.directive('marines', function(){
	return{
		restrict: 'A',
		controller: function(){
			this.soundoff = function(){
				console.log('From Marine')
			}
		}	
	}
})

app.directive('soldier', function(){
	return{
		restrict: 'E',
		controller: function(){
			this.soundoff = function(){
				console.log('From Soldier')
			}
		}
	}
})

app.directive('medalOfHonor', function(){
	return{
		restrict: 'A',
		controller: function(){
			this.soundoff = function(){
				console.log('From Medal Of Honor')
			}
		}
	}
})

app.directive('gunnerySergeant', function(){
	return{
		restrict: 'A',
		controller: function($scope){
			$scope.soundoff = function(){
				console.log('Gunnery Sgt.')
			}
		},
		// ? = optional
		require: ['^soldier', '^marines', '^?medalOfHonor'],
		link: function(scope, element, atrrs, ctrls){
			scope.soundoff() //call soundoff in this directtive
			angular.forEach(ctrls, function(ctrl){
				if(!!ctrl){	ctrl.soundoff() }
			})
		}
	}
})