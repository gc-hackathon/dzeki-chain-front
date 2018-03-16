(function(){

    'use strict';
    angular.module('angularCore').config(['$stateProvider', '$urlRouterProvider', '$httpProvider' ,
                                    function ($stateProvider, $urlRouterProvider, $httpProvider) {

        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home', {
                url: '/home',
                views: {
                
                }
        });
    }]);


})();
