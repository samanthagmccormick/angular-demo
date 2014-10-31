// ANGULAR JS

var myApp = angular.module('myApp', []);

myApp.controller('TableCtrl', function($scope, Users) {

	// In this scope, use users as your data set
	$scope.users = Users;
	// Sort automatically by name
	$scope.predicate = 'name';

});  /* End controller */

myApp.controller('formController', function($scope, Users){
	$scope.users = Users;
	$scope.addForm = {};
	$scope.submitForm = function(data){
		$scope.users.push(data);
		console.log($scope.users);
		$scope.clearForm();
	};
	$scope.clearForm = function(){
		console.log()
		$scope.addForm = {
			name: '',
			gender: '',
			age: null,
			email	: '',
			phone: '',
			location: ''
		};
	};
});

