(function() {
    'use strict';

    // Usage:
    // 
    // Creates:
    // 

    angular
        .module('aariyahcoutureApp')
        .component('category', {
            // template:'htmlTemplate',
            templateUrl: 'views/category.html',
            controller: CategoryController,
            controllerAs: '$ctrl',
            bindings: {
                Binding: '=',
            },
        });

        CategoryController.$inject = ['$scope'];
    function CategoryController($scope) {
        var $ctrl = this;
        

        ////////////////

        $ctrl.$onInit = function() { };
        $ctrl.$onChanges = function(changesObj) { };
        $ctrl.$onDestroy = function() { };
    }
})();