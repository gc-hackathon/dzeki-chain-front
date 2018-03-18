(function () {
    'use strict';

    angular
        .module('angularCore')
        .controller('DogDetailController', DogDetailController);

    DogDetailController.$inject = ['$scope', '$rootScope', '$state', 'dogService', 'breedingHouseService', 'utils', 'notificationService'];

    function DogDetailController($scope, $rootScope, $state, dogService, breedingHouseService, utils, notificationService) {

        $scope.dog = {};
        $scope.breedingHouse = {};

        $scope.viewDog = viewDog;

        $scope.buyDog = buyDog;
        $scope.mateDog = mateDog;

        init();

        function init() {

            dogService.get($state.params.id,
                (response) => {
                    $scope.dog = response.data;
                    if ($scope.dog.photoUrl) {
                        $scope.dog.image = "{ 'background': 'url(" + $scope.dog.photoUrl + ") no-repeat center center local', 'background-size' : 'cover'}";
                    }
                    const breedingHouseId = $scope.dog.owner.split('#')[1];
                    breedingHouseService.get(breedingHouseId,
                        (response) => {
                            $scope.breedingHouse = response.data;
                        },
                        onError
                    );
                },
                onError
            );
        }

        function viewDog(parentLink) {
            const id = parentLink.split('#')[1];
            $state.go('dogDetail', {'id': id});
        }

        function buyDog(id) {
            const request = {
                dog: 'resource:' + utils.dogClass + '#' + $scope.dog.dogId,
                buyer: 'resource:' + utils.breedingHouseClass + '#' + $rootScope.currentUserId,
                seller: $scope.dog.owner
            };
            dogService.buyDog(request,
                () => {
                    notificationService.success('Successful Buy!');
                },
                onError
            );
        }

        function mateDog(id) {

        }

        function onError(id) {
            console.log('error');
        }

    }

})();