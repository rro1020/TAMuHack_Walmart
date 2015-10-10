var helloApp = angular.module('myApp', []); 

var apiKey = '7avjrkabdvma747dmkj65pfe'; 
helloApp.controller("myCtrl",  function ($scope, $http) {
	$http.defaults.headers.put = {
		'Access-Control-Allow-Origin' : '*', 
		'Access-Control-Allow-Methods' : 'POST, GET', 
		'Access-Control-Allow-Credentials': true, 
		'Content-Type' : 'application/json', 
		'Accept' : 'application/json'
	}; 
	$http.defaults.useXDomain = true; 
	delete $http.defaults.headers.common['X-Requested-With']; 
    $http.get('https://api.walmartlabs.com/v1/vod?format=json&apiKey=' + apiKey).
        success(function(data) {
            $scope.greeting = data;
            //console.log(greeting); 
        });
}); 
