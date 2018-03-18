(function () {
    'use strict';

    angular
        .module('angularCore')
        .controller('MyDogsController', MyDogsController);

    MyDogsController.$inject = ['$scope', '$state', 'dogService', 'utils'];

    function MyDogsController($scope, $state, dogService, utils) {

        $scope.selectedRows = [];
        $scope.dogs = [];
        $scope.mappedDogs = {};

        $scope.newDog = newDog;
        $scope.editDog = editDog;

        init();

        function init() {

            const prefix = 'resource:' + utils.dogClass + '#';

            dogService.getByOwner('BH_1',
                (response) => {
                    $scope.dogs = response.data;
                    $scope.dogs.forEach(dog => {
                        $scope.mappedDogs[prefix + dog.dogId] = dog;
                    });
                },
                onError
            );
        }

        function newDog() {
            $state.go('dogNew');
        }

        function editDog() {
            $state.go('dogEdit', { 'id': $scope.selectedRows[0].dogId });
        }

        function onError() {
            console.log('error');
        }

    }
})();