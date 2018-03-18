(function () {
    'use strict';

    angular
        .module('angularCore')
        .controller('MyDogsController', MyDogsController);

    MyDogsController.$inject = ['$scope', '$state', 'dogService'];

    function MyDogsController($scope, $state, dogService) {

        $scope.selectedRows = [];
        $scope.dogs = [];

        $scope.newDog = newDog;
        $scope.editDog = editDog;

        init();

        function init() {

            dogService.getByOwner('BH_1',
                (response) => {
                    $scope.dogs = response.data;
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