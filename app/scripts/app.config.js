(function () {
    'use strict';

    angular
        .module('angularCore')
        .config(['$stateProvider', '$urlRouterProvider', '$httpProvider',
            function ($stateProvider, $urlRouterProvider, $httpProvider) {

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
                        templateUrl: '/scripts/components/about.html',
                        pageTitle: 'About'
                    })
                    .state('login', {
                        url: '/login',
                        templateUrl: '/scripts/components/login/login.html',
                        pageTitle: 'Login'
                    });
            }
        ]);
})();
