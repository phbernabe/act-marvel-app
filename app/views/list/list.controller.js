app.controller('app.act.marvel.list', function ($location, PaginationService, marvel) {
    var vm = this;

    vm.pager = {};
    vm.pageSize = 12;
    vm.loading = false;
    vm.submitted = false;

    vm.characters = [];

    vm.input = {
        'name': ''
    };

    var init = function () {
        let params = $location.search();
        let q = params.q;
        let page = params.page || 1;

        if (q != null && q != undefined) {
            vm.input.name = q;
            getCharacters(page);
        }
    };

    var getCharacters = function (page) {
        page = page || 1;

        if (!vm.loading) {
            vm.loading = true;

            marvel.characters(vm.input.name, (page - 1) * vm.pageSize, vm.pageSize)
                .then(function (response) {
                    vm.characters = response.data.data.results || [];
                    window.scrollTo(0, 0);

                    vm.pager = PaginationService.getPager({
                        'totalItems': response.data.data.total,
                        'currentPage': page,
                        'pageSize': vm.pageSize
                    });

                    vm.submitted = true;
                })
                .finally(function () {
                    vm.loading = false;
                });
        }
    };

    vm.search = function (page) {

        let queryString = {
            'q': vm.input.name,
            'page': page
        };

        $location.path('/').search(queryString);
    }

    init();
});