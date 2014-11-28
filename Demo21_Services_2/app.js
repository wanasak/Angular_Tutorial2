var app = angular.module('app', []);

app.controller('MainController', function($scope,myFactory,myService){
	/* console.log(myFactory.getData())
	myFactory.addData(' wanasak')
	console.log(myFactory.getData()) */
	console.log(myService.getData())
	myService.addData(' wanasak')
	console.log(myService.getData())
})

app.factory('myFactory', function(){
	var myString = "this is some data"
	var addToString = function(newstr){
		myString += newstr
	}
	return{
		getData: function(){
			return "String contains: " + myString
		},
		addData: addToString
	}
})

/* app.service('myService', function() {
	var myString = "this is some data"
	var addToString = function(newstr){
		myString += newstr
	}
	this.getData = function(){
		return "String contains: " + myString
	}
	this.addData = addToString
}) */

app.service('myService',ServiceClass)

function ServiceClass(){
	var myString = "this is some data"
	var addToString = function(newstr){
		myString += newstr
	}
	this.getData = function(){
		return "String contains: " + myString
	}
	this.addData = addToString
}


