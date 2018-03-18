(function () {
    'use strict';

    angular
        .module('angularCore')
        .controller('MyTransactionController', MyTransactionController);

    MyTransactionController.$inject = ['$scope', '$state', 'transactionService'];

    function MyTransactionController($scope, $state, transactionService) {

    onInit();

    function onInit() {
        let request = $state.params.id;
        $scope.selected = [];
    
        transactionService.getAll(request,
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