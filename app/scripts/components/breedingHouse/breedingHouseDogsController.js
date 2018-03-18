(function () {
    'use strict';

    angular
        .module('angularCore')
        .controller('BreedingHouseDogsController', BreedingHouseDogsController);

    BreedingHouseDogsController.$inject = ['$scope', '$state', 'dogService'];

    function BreedingHouseDogsController($scope, $state, dogService) {

        $scope.dogs = [];

        init();

        function init() {

            dogService.getByOwner(1,
                (response) => {
                    $scope.dogs = response.data;
                },
                onError
            );
        }

        function onError() {
            console.log('error');
        }

    }
})();