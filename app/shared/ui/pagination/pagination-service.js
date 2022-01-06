angular.module('ui-utils').service('PaginationService', function () {

    this.getPager = function (param) {
        var totalItems = (param.totalItems === undefined || param.totalItems === null) ? Number.MAX_SAFE_INTEGER : param.totalItems;
        var currentPage = param.currentPage || 1;
        var pageSize = param.pageSize || 20;

        var totalPages = Math.ceil(totalItems / pageSize);

        currentPage = currentPage <= totalPages ? currentPage : totalPages;

        var startPage, endPage;
        var startIndex = 0, endIndex = 0;

        if (totalPages <= 10) {
            startPage = 1;
            endPage = totalPages;

        } else {
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }

        if (totalItems) {
            startIndex = (currentPage - 1) * pageSize;
            endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        }

        var rooms = endPage > 5 ? 5 : endPage;
        var pages = [];
        pages.push(currentPage);

        var inc = 1;

        while (pages.length < rooms) {
            var i = currentPage - inc;
            if (!(i <= 0 || i > endPage)) {
                pages.push(i);
            }

            inc *= -1;
            if (inc > 0) {
                inc++;
            }
        }

        pages = pages.sort(function (a, b) {
            return a - b;
        });

        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    };
});