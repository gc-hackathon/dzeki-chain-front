(function () {
    'use strict';

    angular
        .module('angularCore')
        .config(appConfig);

    appConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];

    function appConfig($stateProvider, $urlRouterProvider, $httpProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: '/scripts/components/home.html',
                controller: 'homeController',
                pageTitle: 'Home'
            })
            .state('about', {
                url: '/about',
                templateUrl: '/scripts/components/about.html'
            })
            .state('detail', {
                url: '/detail/:id',
                templateUrl: '/scripts/components/detail.html',
                controller: 'detailController',
                pageTitle: 'Dog\'s Details'
            })
            .state('login', {
                url: '/login',
                templateUrl: '/scripts/components/login/login.html',
                pageTitle: 'Login'
            });
    }

})();
