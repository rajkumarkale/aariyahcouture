(function() {
    'use strict';

    // Usage:
    // 
    // Creates:
    // 

    angular
        .module('aariyahcoutureApp')
        .component('achive', {
            // template:'htmlTemplate',
            templateUrl: 'views/achive.html',
            controller: AchiveController,
            controllerAs: '$ctrl',
            bindings: {
                Binding: '=',
            },
        });

        AchiveController.$inject = ['$scope'];
    function AchiveController($scope) {
        var $ctrl = this;
        

        ////////////////

        $ctrl.$onInit = function() { };
        $ctrl.$onChanges = function(changesObj) { };
        $ctrl.$onDestroy = function() { };
    }
})();