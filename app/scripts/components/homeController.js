(function () {
    'use strict';

    angular
        .module('angularCore')
        .controller('homeController', homeController);

    homeController.$inject = ['$scope', '$state', 'dogService'];

    function homeController($scope, $state, dogService) {

        $scope.breeds = dogService.getBreeds();

        $scope.filters = {
            name: '',
            breed: '',
            forSale: '',
            gender: '',
            price: {
                min: 0,
                max: 10000
            }
        };

        $scope.slider = {
            options: {
                floor: 0,
                ceil: 10000,
                onEnd: findDogs
            },
        };

        $scope.viewDog = viewDog;
        $scope.findDogs = findDogs;

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
                $scope.model.forEach((dog) => {
                    if(dog.photoUrl) {
                        dog.image = makeThumbnail(dog.photoUrl);
                    }
                })
            }, onError);

        }

        function makeThumbnail(str) {
            let url = "{ 'background': 'url(" + str + ") no-repeat center center local','background-size' : 'cover'}";
            return url;
        }

        function viewDog(dogId) {
            $state.go("dogDetail", {"id": dogId});
        }

        function findDogs() {

            // TODO
            const filter = {
                "where": {
                    "and": [
                        {
                            "or": [
                                {
                                    "name": $scope.filters.name
                                },
                                {
                                    "breed": $scope.filters.breed
                                },
                                {
                                    "forSale": $scope.filters.forSale
                                },
                                {
                                    "gender": ($scope.filters.gender === 'ALL') ? '' : $scope.filters.gender
                                },
                            ]
                        },
                        {
                            "price": {
                                "between": [
                                    $scope.filters.price.min,
                                    $scope.filters.price.max,
                                ]
                            }
                        }
                    ]
                }
            };

            dogService.getFiltered(filter, (response) => {
                $scope.model = response.data;
            }, onError);
        }

        function onError() {
            console.log('error');
        }
    }

})();