(function () {
    'use strict';

    angular
        .module('angularCore')
        .controller('dogEditController', dogEditController);

    dogEditController.$inject = ['$scope', '$state'];

    function dogEditController($scope, $state) {

        $scope.goToDogs = goToDogs;

        init();

        function init() {

        }
        
        function goToDogs() {
            $state.go('home');
        }
    }

})();