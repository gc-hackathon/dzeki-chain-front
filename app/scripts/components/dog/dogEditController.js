(function () {
    'use strict';

    angular
        .module('angularCore')
        .controller('DogEditController', DogEditController);

    DogEditController.$inject = ['$scope', '$state'];

    function DogEditController($scope, $state) {

        $scope.goToDogs = goToDogs;

        init();

        function init() {

        }
        
        function goToDogs() {
            $state.go('home');
        }
    }

})();