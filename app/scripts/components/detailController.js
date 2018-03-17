(function () {
    'use strict';

    angular
        .module('angularCore')
        .controller('detailController', detailController);

    detailController.$inject = ['$scope','$state'];

    function detailController($scope,$state) {
        let str = {
            image: "https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/images/2017/12/dog_eating_chocolate.jpg?itok=2NBmt_8Y&fc=50,50" 
        }

        init();

         function init() {
        //     let newStr = str.map(s => {

        //         s.image = makeThumbnail(s.image);
        //         s.id = $state.params.id;
        //         return s;
        //     })
        //     $scope.model = newStr;
        //     console.log($scope.model)
            
            // console.log(str[0].image)
            $scope.model = {}
            $scope.model.image = makeThumbnail(str.image);
            console.log($scope.model);
        }

        function makeThumbnail(str) {
            let url = "{ 'background': 'url(" + str + ") no-repeat center center local','background-size' : 'cover'}"
            return url;
        }


    }

})();