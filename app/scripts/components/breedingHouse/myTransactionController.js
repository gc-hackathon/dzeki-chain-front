(function () {
    'use strict';

    angular
        .module('angularCore')
        .controller('MyTransactionController', MyTransactionController);

    MyTransactionController.$inject = ['$scope', '$state', 'dogService'];

    function MyTransactionController($scope, $state, dogService) {

    onInit();

    function onInit() {
        let request = $state.params.id;
        $scope.selected = [];
    
        dogService.getTransaction(request,
            (response) => {
                $scope.transactions = response.data;
            },
            onError
        ); 
    }


        function onError(id) {
            console.log('error');
        }
}
})();