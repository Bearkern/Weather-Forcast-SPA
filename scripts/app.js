// Module
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

// Config
weatherApp.config(function($routeProvider) {

   $routeProvider

   .when('/', {
       templateUrl: 'pages/home.html',
       controller: 'homeController'
   })

   .when('/forecast', {
    templateUrl: 'pages/forecast.html',
    controller: 'forecastController'
    });
});

// Service
weatherApp.service('cityService', function() {
    var self = this;
    self.city = 'New York, NY';
});

// Controller
weatherApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService) {
    $scope.city = cityService.city;

    $scope.$watch('city', function() {
        cityService.city = $scope.city;
    });
}]);

weatherApp.controller('forecastController', ['$scope', 'cityService', function($scope, cityService) {
    $scope.city = cityService.city;

}]);