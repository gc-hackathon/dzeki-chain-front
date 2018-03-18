(function () {
    'use strict';

    angular
        .module('angularCore')
        .controller('DogDetailController', DogDetailController);

    DogDetailController.$inject = ['$scope','$state','dogService'];

    function DogDetailController($scope,$state, dogService) {
        let str = {
            image: "https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/images/2017/12/dog_eating_chocolate.jpg?itok=2NBmt_8Y&fc=50,50" 
        }

        $scope.onClickBuy = onClickBuy;

        init();

         function init() {
            //api 
             $scope.model = {}
             let request = $state.params.id;
             dogService.get(request,(response) => {
                 $scope.model = response.data;
             }, () => { });

            $scope.model.image = makeThumbnail(str.image);
            console.log($scope.model);
        }

        function makeThumbnail(str) {
            let url = "{ 'background': 'url(" + str + ") no-repeat center center local','background-size' : 'cover'}"
            return url;
        }

        function onClickBuy(id) {
            // API FOR BUY
        }

    }

})();