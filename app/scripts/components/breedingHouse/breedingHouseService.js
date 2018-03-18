(function () {
    'use strict';

    angular.module('angularCore')
        .service('breedingHouseService', breedingHouseService);

    breedingHouseService.$inject = ['$http', 'REST_END_POINT'];

    function breedingHouseService($http, REST_END_POINT) {

        return {
            getAll: getAll,
            get: get,
            add: add,
            edit: edit
        };

        function getAll(onSuccess, onError) {
            var req = {
                method: 'GET',
                url: REST_END_POINT.concat('/BreedingHouse'),
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            $http(req).then(onSuccess, onError);
        }

        function get(id, onSuccess, onError) {
            var req = {
                method: 'GET',
                url: REST_END_POINT.concat('/BreedingHouse/') + id,
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            $http(req).then(onSuccess, onError);
        }

        function add(element, onSuccess, onError) {
            $http.post(REST_END_POINT.concat('/BreedingHouse/'), element).then(onSuccess, onError);
        }

        function edit(element, onSuccess, onError) {
            $http.put(REST_END_POINT.concat('/BreedingHouse/' + element.breedingHouseId), element).then(onSuccess, onError);
        }
    }

})();