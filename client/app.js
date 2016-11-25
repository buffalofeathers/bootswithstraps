angular.module('boots', ['ngRoute', 'ngResource'])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
    .when('/', {
        templateUrl: 'views/home.html',

    })
    .when('/boots', {
        templateUrl: 'views/boots.html'

    })
}]);