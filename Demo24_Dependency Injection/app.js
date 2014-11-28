var app = angular.module('app', []);

/* app.controller('MainController', function($scope,DataService){
	$scope.mydata = DataService.data
}) */

app.controller('MainController', ['$scope', 'DataService', function(b,c){
	b.mydata = c.data
}])

app.factory('DataService', ['AppendService',function(AppendService){
	return{
		data: AppendService.append('this is service data')
	}
}])

app.factory('AppendService', function(){
	return{
		append: function(val){
			return val + " and this too!"
		}
	}
})