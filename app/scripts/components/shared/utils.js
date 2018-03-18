(function() {
    'use strict';

    angular
        .module('angularCore')
        .factory('utils', utils);

    utils.$inject = [];

    function utils() {

        return {
            guid: guid
        };

        function guid() {
            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000)
                    .toString(16)
                    .substring(1);
            }
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
        }
    }

})();
