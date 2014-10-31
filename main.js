// ANGULAR JS

var myApp = angular.module('myApp', []);

myApp.controller('TableCtrl', function($scope, Users) {

	// In this scope, use users as your data set
	$scope.users = Users;
	// Sort automatically by name
	$scope.predicate = 'name';

});  /* End controller */

