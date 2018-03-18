(function () {
    'use strict';

    angular.module('angularCore')
        .service('transactionService', transactionService);

    transactionService.$inject = ['$http', 'REST_END_POINT'];

    function transactionService($http, REST_END_POINT) {

        return {
            getAll: getAll
        };

        function getAll() {
            
        }
    }

})();