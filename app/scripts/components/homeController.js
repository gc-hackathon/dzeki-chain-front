(function () {
    'use strict';

    angular
        .module('angularCore')
        .controller('homeController', homeController);

    homeController.$inject = ['$scope','$state'];

    function homeController($scope, $state) {
        $scope.onClickCard = onClickCard;
        
       let str=[
                {image:  "https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/images/2017/12/dog_eating_chocolate.jpg?itok=2NBmt_8Y&fc=50,50"},
                {image: "https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/images/2017/12/dog_eating_chocolate.jpg?itok=2NBmt_8Y&fc=50,50" }]

        init();

        function init() {
            let newStr = str.map(s => {
        
                 s.image = makeThumbnail(s.image);
                  s.id = Math.random(); 
                  return s;
            })
            $scope.model = newStr;
        
        }
    
        function  makeThumbnail( str ) {
            let url = "{ 'background': 'url(" + str +  ") no-repeat center center local','background-size' : 'cover'}"
            return url;
        }

        function onClickCard(thumb){
            $state.go("detail", { "id": thumb.id }); 
        }

    } 

    }) ();