// MODULE is a container for different parts of your app
// second arguement defines dependencies

var myApp = angular

	.module("myApp", ["ngRoute"])

	.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
		$routeProvider.caseInsensitiveMatch = true;

		$routeProvider
			.when("/employees", {
				templateUrl: "employees/employees_view.html",
				controller: "employeesController"
			})
			.when("/employees/:id", {
				templateUrl: "employees/employees_details.html",
				controller: "employeeDetailsController"
			})
			.when("/custom_service", {
				templateUrl: "custom_service/string_space.html",
				controller: "customServiceController"
			})
			.otherwise({
				redirectTo: "/employees"
			})

		// $locationProvider.html5Mode(true);
	}]);

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

myApp.controller("anchorScrollController", ["$scope", "$location", "$anchorScroll", function ($scope, $location, $anchorScroll) {

	$scope.scrollTo = function (scrollLocation) {
		$location.hash(scrollLocation);
		$anchorScroll.yOffset = 20;
		$anchorScroll();
	};

}]);

myApp.controller("employeesController", ["$scope", "$rootScope", "$http", "$log", "$route", function ($scope, $rootScope, $http, $log, $route) {

	// $scope.reload = function () {
	//	$route.reload();
	//};

	//$rootScope.global = "THIS VARIABLE IS AVAILABLE TO ALL CONTROLLERS"

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

	$http.get(
		"../data/employees.json"
	)
	.success(
		successCallBack, errorCallBack
	);

	$scope.orderBy = "firstName";

	$scope.directoryView = "employees/employees_list.html";

	$scope.upvote = function (employee) {
		employee.votes++;
	};

	$scope.downvote = function (employee) {
		employee.votes--;
	};

}]);

myApp.controller("employeeDetailsController", ["$scope", "$http", "$routeParams", function ($scope, $http, $routeParams) {

	var successCallBack = function (response) {
		$scope.employee = response[parseInt($routeParams.id) - 1]
	};

	var errorCallBack = function (response) {
		$scope.error = response.data;
	};

	$http
		.get(
			"../data/employees.json"
		)
		.success(
			successCallBack, errorCallBack	
		);

}]);
