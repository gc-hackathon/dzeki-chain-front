(function () {
    'use strict';

    angular
        .module('angularCore')
        .controller('MyDogsController', MyDogsController);

    MyDogsController.$inject = ['$scope', '$state', 'dogService'];

    function MyDogsController($scope, $state, dogService) {

        $scope.selectedRows = [];

        $scope.newDog = newDog;
        $scope.editDog = editDog;

        $scope.selectDog = selectDog;
        $scope.deselectDog = deselectDog;

        $scope.dogs = [];

        init();

        function init() {

            // dogService.getByOwner(1,
            //     (response) => {
            //         $scope.dogs = response.data;
            //     },
            //     onError
            // );
            $scope.dogs = dogService.getByOwner(1, null, null);
        }

        function newDog() {
            $state.go('dogNew');
        }

        function editDog() {

        }

        function selectDog() {

        }

        function deselectDog() {

        }

        function onError() {
            console.log('error');
        }

    }
})();