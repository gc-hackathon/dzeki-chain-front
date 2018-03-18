(function () {
    'use strict';

    angular
        .module('angularCore')
        .controller('DogEditController', DogEditController);

    DogEditController.$inject = ['$scope', '$rootScope', '$state', 'dogService', 'notificationService', 'utils'];

    function DogEditController($scope, $rootScope, $state, dogService, notificationService, utils) {

        const isEditMode = angular.isDefined($state.params.id);

        $scope.breeds = dogService.getBreeds();

        $scope.photoUploadMessage = null;

        $scope.submitForm = submitForm;
        $scope.goToDogs = goToDogs;

        $scope.uploadImage = uploadImage;

        init();

        function init() {
            if (isEditMode) {
                dogService.get($state.params.id,
                    (response) => {
                        $scope.dog = response.data;
                    },
                    onError
                );
            } else {
                $scope.dog = {
                    forSale: false,
                    forMate: false
                };
            }
        }

        function submitForm(form) {

            if (!isEditMode) {
                $scope.dog.dogId = utils.guid();
                $scope.dog.owner = 'resource:' + utils.breedingHouseClass + $rootScope.currentUserId;
                dogService.add($scope.dog,
                    () => {
                        notificationService.success('Dog created!');
                        $scope.dog = {
                            forSale: false,
                            forMate: false
                        };
                        form.$setPristine();
                        form.$setUntouched();
                    },
                    onError
                );
            } else {
                dogService.edit($scope.dog,
                    () => {
                        notificationService.success('Dog updated!');
                        form.$setPristine();
                    },
                    onError
                );
            }
        }

        function uploadImage() {
            const ref = firebase.storage().ref();
            const file = document.querySelector('#photo').files[0];
            const name = (+new Date()) + '-' + file.name;
            const metadata = {
                contentType: file.type
            };
            const task = ref.child(name).put(file, metadata);
            task.then((snapshot) => {
                $scope.dog.photoUrl = snapshot.downloadURL;
                $scope.photoUploadMessage = 'Image uploaded!'
            }).catch((error) => {
                console.error(error);
            });
        }

        function goToDogs() {
            $state.go('myDogs');
        }

        function onError() {
            console.log('error');
        }
    }

})();