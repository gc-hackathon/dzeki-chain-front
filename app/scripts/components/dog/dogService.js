(function () {
    'use strict';

    angular.module('angularCore')
        .service('dogService', dogService);

    dogService.$inject = ['$http', 'REST_END_POINT'];

    function dogService($http, REST_END_POINT) {

        return {
            getAll: getAll,
            get: get,
            getFiltered: getFiltered,
            add: add,
            edit: edit,
            getByOwner: getByOwner,
            getBreeds: getBreeds
        };

        function getAll(onSuccess, onError) {
            const req = {
                method: 'GET',
                url: REST_END_POINT.concat('/Dog'),
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            $http(req).then(onSuccess, onError);
        }

        function get(id, onSuccess, onError) {
            const req = {
                method: 'GET',
                url: REST_END_POINT.concat('/Dog/') + id,
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            $http(req).then(onSuccess, onError);
        }

        function getFiltered(filter, onSuccess, onError) {
            const req = {
                method: 'GET',
                url: REST_END_POINT.concat('/Dog?filter=' + encodeURIComponent(JSON.stringify(filter))),
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
            $http.put(REST_END_POINT.concat('/Dog/' + element.dogId), element).then(onSuccess, onError);
        }

        function getByOwner(id, onSuccess, onError) {
            const filter = {
                "where": {
                    "owner": "resource:org.acme.mynetwork.BreedingHouse#" + id
                }
            };
            const req = {
                method: 'GET',
                url: REST_END_POINT.concat('/Dog?filter=' + encodeURIComponent(JSON.stringify(filter))),
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            $http(req).then(onSuccess, onError);
        }

        function getBreeds() {
            return [
                'Labrador',
                'Maltezer',
                'Haski',
                'Zlatni Retriver'
            ];
        }
    }

})();