var app = angular.module('app', []);

app.controller('MainController', function($scope){
	$scope.mydata = {arr:[
	{name:'jane',age:34},
	{name:'jake',age:56},
	{name:'joe',age:23},
	{name:'john',age:12}
	]}
})

app.filter('charlimit', function(){
	return function(input,length){
		if(!length){
			length = 10
		}
		if(!input){
			input = ''
		}
		if(input.length <= length){
			return input
		}
		else{
			return input.substring(0,length) + '...'
		}
	}
})

app.filter('candrink', function(){
	return function(data,minage){
		var filtered = [];
		if(!minage){
			minage = 0;
		}
		for(var i=0;i<data.length;i++){
			var value = data[i];
			if(value.age >= minage){
				filtered.push(value);
			}
		}
		return filtered;
	}
})
