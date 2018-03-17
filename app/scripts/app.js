(function () {
    'use strict';

    angular
        .module('angularCore', [
            "ui.router", 'ui.grid', 'ui.grid.selection', 'ui.tree', 'ngMaterial', 'ngMdIcons', 'ngScrollbars',
            'ngMessages']
        )
        .constant('REST_END_POINT', 'http://localhost:5000/api');
})();
