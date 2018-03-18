(function () {
    'use strict';

    angular
        .module('angularCore', [
            "ui.router", 'ui.grid', 'ui.grid.selection', 'ui.tree', 'ngMaterial', 'ngMdIcons', 'ngScrollbars',
            'ngMessages', 'toaster', 'md.data.table', 'rzModule']
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

        // Initialize Firebase
        const config = {
            apiKey: "AIzaSyDEUAcvKuwj_6OM3j-_MK_giCXukVfLbCw",
            authDomain: "dzekichain.firebaseapp.com",
            databaseURL: "https://dzekichain.firebaseio.com",
            projectId: "dzekichain",
            storageBucket: "dzekichain.appspot.com",
            messagingSenderId: "223058140361"
        };
        firebase.initializeApp(config);

    }

})();
