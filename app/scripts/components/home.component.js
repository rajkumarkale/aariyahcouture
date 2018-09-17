
(function() {
    'use strict';

    // Usage:
    // 
    // Creates:
    // 

    angular
        .module('aariyahcoutureApp')
        .component('home', {
            // template:'<h1>Home</h1>',
            templateUrl: 'views/home.html',
            controller: HomeController,
            controllerAs: '$ctrl',
            bindings: {
                Binding: '=',
            },
        });

        HomeController.$inject = ['$scope'];
    function HomeController($scope) {
        var $ctrl = this;        

        $scope.gadgetImgaesList = ['img1','img2','img3','img4','img5']
        ////////////////

        $ctrl.$onInit = function() { };
        $ctrl.$onChanges = function(changesObj) { };
        $ctrl.$onDestroy = function() { };
    }
})();