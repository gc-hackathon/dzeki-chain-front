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
                templateUrl: '/scripts/components/about.html',
                pageTitle: 'About'
            })
            .state('dogDetail', {
                url: '/detail/:id',
                templateUrl: '/scripts/components/dog/dogDetail.html',
                controller: 'DogDetailController',
                pageTitle: 'Dog\'s Details'
            })
            .state('dogNew', {
                url: '/dog/new',
                templateUrl: '/scripts/components/dog/dogEdit.html',
                controller: 'DogNewController',
                pageTitle: 'New Dog'
            })
            .state('login', {
                url: '/login',
                templateUrl: '/scripts/components/login/login.html',
                pageTitle: 'Login'
            });
    }

})();
