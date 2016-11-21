// MODULE is a container for different parts of your app
// second arguement defines dependencies

var myApp = angular.module("myApp", []);

// CONTROLER is a JS function w/ job to build a model for the view to display
// register controller to app
// data attached to the scope is the model

// SERVICE is an object the encapsulates reusable logic - single responsibility principle

// $scope, $http, $log === services

myApp.controller("customServiceController", ["$scope", "stringService", function ($scope, stringService) {

	$scope.formView = "custom_service/string_space.html";

	$scope.transformString = function (input) {
		$scope.output = stringService.processString(input);
	};

}]);

myApp.controller("employeeDirectoryController", ["$scope", "$http", "$log", function ($scope, $http, $log) {

	// AJAX
	// $http.get, .put, .post ect...

	// handle response from an API... 
	// function(response) {
	// 	$scope.attribute = response.data
	// }

	// $http.get("../data/employees.json").success(function(JSON){
	// 	$scope.employees = JSON;
	// })

	var successCallBack = function (response) {
		// $scope.employees = response.data if requested from API instead of local JSON
		$scope.employees = response;
	};

	var errorCallBack = function (response) {
		$scope.error = response.data;
		// console logs the response
		$log.info(response);
	};

	$http({
		method: "GET",
		url: "../data/employees.json"
	}).success(successCallBack, errorCallBack)

	$scope.orderBy = "firstName";

	$scope.directoryView = "employee_directory/directory_list.html";

	$scope.upvote = function (employee) {
		employee.votes++;
	};

	$scope.downvote = function (employee) {
		employee.votes--;
	};

}]);
