var app = angular.module('app', []);

app.controller('MainController', function($scope, myFactory){
	console.log(myFactory.getdata())
})

app.factory('myFactory', function(){
	return{
		mydata: 'this is some data',
		getdata: function(){
			return this.mydata
		}
	}
})