angular.module('ui-utils', []);
angular.module('ui-utils').component('uiPagination', {
    templateUrl: "app/shared/ui/pagination/pagination.html",
    bindings: {
        pager: '<',
        search: '<'
    }
});