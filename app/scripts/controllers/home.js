// Name: home.js 
// Description: This is main javascript for consisiting of HomeCtrl
// API: /api/addtack, /api/addboard, /api/addboard, /api/removeboard, /api/deletetack, /api/updatetack
'use strict';

angular.module('mytacksApp')
.controller('HomeCtrl', function($scope, User, $http, Session, $location, $rootScope, $route){

	$scope.user = $rootScope.currentUser;

	// $http.get('/api/users/me').success(function(user) {
 //      $scope.user = user.name;
 //      console.dir(user);
 //    });
	
	
	var show = true;

	$scope.setMaster = function(boards) {
    $scope.selected = boards;
	};

	$scope.isSelected = function(boards) {
    return $scope.selected === boards;
	};

	//$scope.link = '';	
	// Adding a Tack
	$scope.formData = {};
	$scope.addTack = function(){
		
		$http.post('/api/addtack', $scope.formData)
		.success(function(){
			alert("Added Tack");
			show = false;
			//$scope.posts = $http.get('/api/posts').success(function(data){$scope.posts = data;});
			window.location.href = "/home";
		});
	};

	// Adding a Board
	$scope.addBoard = function(){
		$http.post('/api/addboard', $scope.formData)
		.success(function(){ 

			alert("Added Board");
			window.location.href = "/dashboard";
		});
	};

	// Removing a Board
	$scope.removeBoard = function(){
		$http.post('/api/removeboard', $scope.formData)
		.success(function(){ 
			alert("Removed Board");
			window.location.href = "/dashboard";
		});
	};

	// Removing a Tack
	$scope.deleteTack = function(tack, selected){
		$scope.formData.tack = tack;
        $scope.formData.board = $scope.selected;
		$http.post('/api/deletetack/', $scope.formData).success(function(){
			alert('Tack Deleted');	
			window.location.href = "/dashboard"
		});
	};

	// Updating a Tack
	$scope.updateTack = function(){
		$http.post('/api/updatetack', $scope.formData)
		.success(function(){ 
			alert("Updated Tack");
			window.location.href = "/dashboard"
		});
	};

	$scope.updateValues = function(tack){
		$scope.formData.link = tack.link;
	};

	//follow a tack on board
	$scope.follow = function(tack){
                $scope.formData.tack = tack;
                $http.post('/api/follow', $scope.formData)
                .success(function(){
                        alert("Followed");
                        $route.reload();
                });
        };

	//unfollow board on tack
	$scope.unfollow = function(tack){
                $scope.formData.tack = tack;
                $http.post('/api/unfollow', $scope.formData).success(function(){
                        alert('Unfollowed');
                        $route.reload();
                });
        };
});
	
