angular.module('marvel-app').config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "app/views/list/list.html"
        })
        .when("/details/:id", {
            templateUrl: "app/views/details/details.html"
        })
        ;
});