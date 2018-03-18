(function () {
    'use strict';

    angular
        .module('angularCore')
        .controller('homeController', homeController);

    homeController.$inject = ['$scope', '$rootScope', '$state', 'dogService', 'utils'];

    function homeController($scope, $rootScope, $state, dogService, utils) {

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

        init();

        function init() {

            dogService.getAll((response) => {
                $scope.model = response.data;
                filterIfNeeded();
                loadImages();
            }, onError);

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
                filterIfNeeded();
            }, onError);
        }

        function filterIfNeeded() {
            const ownerId = 'resource:' + utils.breedingHouseClass + '#' + $rootScope.currentUserId;
            if($rootScope.currentUserId !== null) {
                $scope.model = $scope.model.filter(dog => dog.owner !== ownerId);
            }
        }

        function loadImages() {
            $scope.model.forEach((dog) => {
                if(dog.photoUrl) {
                    dog.image = "{ 'background': 'url(" + dog.photoUrl + ") no-repeat center center local', 'background-size' : 'cover'}";
                }
            })
        }

        function onError() {
            console.log('error');
        }
    }

})();