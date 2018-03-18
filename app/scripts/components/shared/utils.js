(function() {
    'use strict';

    angular
        .module('angularCore')
        .factory('utils', utils);

    utils.$inject = [];

    function utils() {

        const breedingHouseClass = 'org.acme.mynetwork.BreedingHouse#';
        const dogClass = 'org.acme.mynetwork.Dog#';

        return {
            breedingHouseClass: breedingHouseClass,
            dogClass: dogClass,
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
