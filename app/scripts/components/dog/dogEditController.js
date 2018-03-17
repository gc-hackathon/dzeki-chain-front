(function () {
    'use strict';

    angular
        .module('angularCore')
        .controller('dogEditController', dogEditController);

    dogEditController.$inject = ['$scope', '$state'];

    function dogEditController($scope, $state) {

        init();

        function init() {

        }
    }

})();