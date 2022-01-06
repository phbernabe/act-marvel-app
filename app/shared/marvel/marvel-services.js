angular.module('marvel-app').service('marvel', function ($http, config) {

    var _createAuthorizationString = function () {
        let ts = Date.now();
        let hash = CryptoJS.MD5(ts + config.privkey + config.pubkey);

        return 'apikey=' + config.pubkey + '&ts=' + ts + '&hash=' + hash;
    }

    var _doGetRequest = function (api, params) {
        params = params || [];

        params.push(_createAuthorizationString());

        return $http.get(config.host + api + '?' + params.join('&'));
    };

    this.characters = function (name, offset, limit) {
        let params = [];

        if (name && name.length > 0) {
            params.push('nameStartsWith=' + name);
        }

        if (offset) {
            params.push('offset=' + offset);
        }

        if (limit) {
            params.push('limit=' + limit);
        }

        return _doGetRequest(config.apis.search, params);
    };

    this.characterDetails = function (id) {
        let api = config.apis.details.replace('{characterId}', id);
        return _doGetRequest(api);
    };
});