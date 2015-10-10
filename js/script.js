var helloApp = angular.module('helloApp', ['ngResource']); 


var apiKey = '7avjrkabdvma747dmkj65pfe'; 
helloApp.controller("HttpController", ['$scope', '$resource', 
function Hello($scope, $http) {
    $http.get('http://api.walmartlabs.com/v1/vod?format=json&apiKey=' + apiKey).
        success(function(data) {
            $scope.greeting = data;
            console.log(greeting); 
        });
}]); 