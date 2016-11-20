// MODULE is a container for different parts of your app
// second arguement defines dependencies

// create a module, controller and register controller to module in one line - method chaining

// var myApp = angular
// 	.module('myApp', [])
// 	.controller('myController', ['$scope', function($scope) {
// 	var employee = {
// 		firstName: "David",
// 		lastName: "Rodgers",
// 		gender: "Male"
// 	}

// 	$scope.employee = employee;
// }]);

var myApp = angular.module("myApp", []);

// CONTROLER is a JS function w/ job to build a model for the view to display
// register controller to app
// data attached to the scope is the model

myApp.controller('myController', ['$scope', function($scope) {

	var employee = {
		firstName: "David",
		lastName: "Rodgers",
		gender: "Male",
		image_src: "../content/images/space_monkey.jpg"
	};

	$scope.employee = employee;
	
}]);







