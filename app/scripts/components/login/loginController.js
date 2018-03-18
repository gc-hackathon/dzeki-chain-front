(function () {
    'use strict';

    angular
        .module('angularCore')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$scope', '$rootScope', '$state', 'notificationService', 'breedingHouseService'];

    function LoginController($scope, $rootScope, $state, notificationService, breedingHouseService) {

        $scope.loginData = {};

        $scope.submitLoginForm = submitLoginForm;

        function submitLoginForm(form) {

            breedingHouseService.get($scope.loginData.username,
                (response) => {
                    $rootScope.currentUserId = response.data.breedingHouseId;
                    localStorage.setItem('currentUserId', $rootScope.currentUserId);
                    $state.go('home');
                },
                onError
            );
        }

        function onError() {
            notificationService.error('Invalid username or password');
        }
    }
})();