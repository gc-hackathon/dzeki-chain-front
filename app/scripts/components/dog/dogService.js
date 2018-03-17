(function () {
    'use strict';

    angular.module('angularCore')
        .service('dogService', dogService);

    dogService.$inject = ['$http', 'REST_END_POINT'];

    function dogService($http, REST_END_POINT) {

        return {
            getAll: getAll,
            get: get,
            add: add,
            edit: edit
        };

        function getAll(onSuccess, onError) {
            var req = {
                method: 'GET',
                url: REST_END_POINT.concat('/Dog'),
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            $http(req).then(onSuccess, onError);
        }

        function get(id, onSuccess, onError) {
            var req = {
                method: 'GET',
                url: REST_END_POINT.concat('/Dog/') + id,
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            $http(req).then(onSuccess, onError);
        }

        function add(element, onSuccess, onError) {
            $http.post(REST_END_POINT.concat('/Dog/'), element).then(onSuccess, onError);
        }

        function edit(element, onSuccess, onError) {
            $http.put(REST_END_POINT.concat('/Dog/' + element.id), element).then(onSuccess, onError);
        }
    }

})();