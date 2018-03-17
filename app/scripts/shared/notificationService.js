(function() {
    'use strict';

    angular
        .module('angularCore.shared')
        .factory('notificationService', notificationService);

    notificationService.$inject = ['toaster'];

    function notificationService(toaster) {

        var TYPE_SUCCESS = 'success';
        var TYPE_INFO = 'info';
        var TYPE_ERROR = 'error';

        return {
            TYPE_ERROR: TYPE_ERROR,
            TYPE_SUCCESS: TYPE_SUCCESS,
            TYPE_INFO: TYPE_INFO,
            popMessage: popMessage,
            success: success,
            info: info,
            error: error
        };

        function popMessage(type, content) {
            toaster.pop({
                type: type,
                body: content,
                timeout: 3000
            });
        }

        function success(content) {
            toaster.pop({
                type: TYPE_SUCCESS,
                body: content,
                timeout: 3000
            });
        }

        function info(content) {
            toaster.pop({
                type: TYPE_INFO,
                body: content,
                timeout: 3000
            });
        }

        function error(content) {
            toaster.pop({
                type: TYPE_ERROR,
                body: content,
                timeout: 3000
            });
        }
    }

})();