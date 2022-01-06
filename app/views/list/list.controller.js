app.controller('app.act.marvel.list', function (PaginationService, marvel) {
    var vm = this;

    vm.pager = {};
    vm.pageSize = 12;
    vm.loading = false;
    vm.submitted = false;

    vm.characters = [];

    vm.input = {
        'name': ''
    };

    vm.find = function () {
        console.log('find');
    };

    vm.search = function (page) {
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
});