// MODULE is a container for different parts of your app
// second arguement defines dependencies

var myApp = angular.module("myApp", []);

// CONTROLER is a JS function w/ job to build a model for the view to display
// register controller to app
// data attached to the scope is the model

myApp.controller('myController', ['$scope', function($scope) {
	$scope.message = "AngularJS Tutorial";
}]);




