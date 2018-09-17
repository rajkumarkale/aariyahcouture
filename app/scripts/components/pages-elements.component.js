(function() {
    'use strict';

    // Usage:
    // 
    // Creates:
    // 

    angular
        .module('aariyahcoutureApp')
        .component('pagesElements', {
            // template:'htmlTemplate',
            templateUrl: 'views/pages-elements.html',
            controller: PagesElementController,
            controllerAs: '$ctrl',
            bindings: {
                Binding: '=',
            },
        });

        PagesElementController.$inject = ['$scope'];
    function PagesElementController($scope) {
        var $ctrl = this;
        

        ////////////////

        $ctrl.$onInit = function() { };
        $ctrl.$onChanges = function(changesObj) { };
        $ctrl.$onDestroy = function() { };
    }
})();