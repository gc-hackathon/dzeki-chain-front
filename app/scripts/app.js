(function () {
    'use strict';

    angular
        .module('angularCore', [
            "ui.router", 'ui.grid', 'ui.grid.selection', 'ui.tree', 'ngMaterial', 'ngMdIcons', 'ngScrollbars',
            'ngMessages', 'toaster']
        )
        .constant('REST_END_POINT', 'http://localhost:3000/api')
        .controller('AppController', AppController);

    AppController.$inject = ['$scope', '$rootScope'];

    function AppController($scope, $rootScope) {

        $rootScope.toasterOptions = {
            'debug': false,
            'newest-on-top': false,
            'close-button': true,
            'toast-class': 'animated fadeInDown',
            'timeout': 3000,
            'limit': 1
        };

        $rootScope.$on('$stateChangeStart', function (event, next, current) {
            $rootScope.browserPageTitle = 'DzekiChain - ' + next.pageTitle;
            $rootScope.pageTitle = next.pageTitle;
        });

    }

})();
