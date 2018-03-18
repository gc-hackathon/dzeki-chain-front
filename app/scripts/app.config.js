(function () {
    'use strict';

    angular
        .module('angularCore')
        .config(appConfig);

    appConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];

    function appConfig($stateProvider, $urlRouterProvider, $httpProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/scripts/components/home.html',
                controller: 'homeController',
                pageTitle: 'Find Your Dog'
            })
            .state('about', {
                url: '/about',
                templateUrl: '/scripts/components/about.html',
                pageTitle: 'About'
            })
            .state('myDogs', {
                url: '/my-dogs',
                templateUrl: '/scripts/components/breedingHouse/myDogs.html',
                controller: 'MyDogsController',
                pageTitle: 'My Dogs'
            })
            .state('dogDetail', {
                url: '/dogs/view/:id',
                templateUrl: '/scripts/components/dog/dogDetail.html',
                controller: 'DogDetailController',
                pageTitle: 'Dog\'s Details'
            })
            .state('dogNew', {
                url: '/dogs/new',
                templateUrl: '/scripts/components/dog/dogEdit.html',
                controller: 'DogEditController',
                pageTitle: 'New Dog'
            })
            .state('dogEdit', {
                url: '/dogs/:id',
                templateUrl: '/scripts/components/dog/dogEdit.html',
                controller: 'DogEditController',
                pageTitle: 'Edit Dog'
            })
            .state('login', {
                url: '/login',
                templateUrl: '/scripts/components/login/login.html',
                pageTitle: 'Login'
            });
    }

})();
