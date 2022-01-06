angular.module('marvel-app').directive('uiPagination', function () {
    return {
        templateUrl: "app/shared/templates/pagination.html",
        replace: true,
        restrict: 'EA',
        scope: false
    };
});