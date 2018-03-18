(function () {
    'use strict';

    angular
        .module('angularCore')
        .controller('DogEditController', DogEditController);

    DogEditController.$inject = ['$scope', '$state', 'dogService', 'notificationService', 'utils'];

    function DogEditController($scope, $state, dogService, notificationService, utils) {

        const isEditMode = angular.isDefined($state.params.id);

        $scope.submitForm = submitForm;
        $scope.goToDogs = goToDogs;

        init();

        function init() {
            if (isEditMode) {
                dogService.get($state.params.id,
                    (response) => {
                        $scope.dog = response.data;
                    },
                    onError
                );
            }
        }

        function submitForm(form) {
            // uploadImage();
            if (!isEditMode) {
                $scope.dog.dogId = utils.guid();
                $scope.dog.owner = 'resource:org.acme.mynetwork.BreedingHouse#1';
                dogService.add($scope.dog,
                    () => {
                        notificationService.success('Dog successfully created!');
                        form.$setPristine();
                        $scope.dog = {};
                    },
                    onError
                );
            } else {
                dogService.edit($scope.dog,
                    () => {
                        notificationService.success('Dog successfully updated!');
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
                const url = snapshot.downloadURL;
                console.log(url);
                // document.querySelector('#someImageTagID').src = url;
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