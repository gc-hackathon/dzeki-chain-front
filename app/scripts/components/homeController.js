(function () {
    'use strict';

    angular
        .module('angularCore')
        .controller('homeController', homeController);

    homeController.$inject = ['$scope', '$state', 'dogService'];

    function homeController($scope, $state, dogService) {

        $scope.onClickCard = onClickCard;

        // let str = [
        //     {image: "https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/images/2017/12/dog_eating_chocolate.jpg?itok=2NBmt_8Y&fc=50,50"},
        //     {image: "https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/images/2017/12/dog_eating_chocolate.jpg?itok=2NBmt_8Y&fc=50,50"},
        //     {image: "https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/images/2017/12/dog_eating_chocolate.jpg?itok=2NBmt_8Y&fc=50,50"},
        //     {image: "https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/images/2017/12/dog_eating_chocolate.jpg?itok=2NBmt_8Y&fc=50,50"},
        //     {image: "https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/images/2017/12/dog_eating_chocolate.jpg?itok=2NBmt_8Y&fc=50,50"},
        //     {image: "https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/images/2017/12/dog_eating_chocolate.jpg?itok=2NBmt_8Y&fc=50,50"}
        // ];

        init();

        function init() {
            // let newStr = str.map(s => {
            //     s.image = makeThumbnail(s.image);
            //     s.id = Math.random();
            //     return s;
            // })
            dogService.getAll((response) => {
                $scope.model = response.data;
            }, () => {});

        }

        function makeThumbnail(str) {
            let url = "{ 'background': 'url(" + str + ") no-repeat center center local','background-size' : 'cover'}";
            return url;
        }

        function onClickCard(thumb) {
            $state.go("dogDetail", {"id": thumb.id});
        }
    }

})();