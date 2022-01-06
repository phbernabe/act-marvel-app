app.controller('app.act.marvel.details', function ($routeParams, marvel) {
    var vm = this;

    vm.character = {};
    vm.wiki = null;

    vm.loading = false;

    var init = function () {
        getCharacter($routeParams.id);
    }

    var getCharacter = function (id) {
        if (!vm.loading) {

            vm.loading = true;

            marvel.characterDetails(id)
                .then(function (response) {
                    vm.character = response.data.data.results[0];
                    vm.wiki = vm.character.urls.find(x => x.type === 'wiki');
                })
                .finally(function () {
                    vm.loading = false;
                })
        }
    }

    vm.goBack = function () {
        history.back();
    }

    vm.scrollTop = function () {
        window.scrollTo(0, 0);
    }

    init();
});