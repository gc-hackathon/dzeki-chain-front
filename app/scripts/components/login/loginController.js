(function () {
    'use strict';

    angular
        .module('app.login')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$scope', '$state', 'Security', 'notificationService'];

    function LoginController($scope, $state, Security, notificationService) {

        $scope.loginData = {};

        $scope.submitLoginForm = submitLoginForm;

        function submitLoginForm(form) {

            Security.login($scope.loginData,
                // success
                function (data) {
                    $state.go('home');
                },
                // error
                function (data) {
                    notificationService.error('Invalid username or password');
                }
            );
        }
    }
})();