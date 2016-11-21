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

myApp.controller('employeeDirectory', ['$scope', '$http', function($scope, $http) {

	$http.get('../data/employees.json').success(function(JSON){
		$scope.employees = JSON;
	})

	$scope.orderBy = "firstName";

	$scope.directoryView = "directory_list.html";

	$scope.upvote = function(employee) {
		employee.votes++;
	};

	$scope.downvote = function(employee) {
		employee.votes--;
	};

}]);






