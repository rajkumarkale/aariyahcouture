(function() {
    'use strict';

    angular
        .module('aariyahcoutureApp')
        .controller('AppCtrl', AppCtrl);

        AppCtrl.$inject = ['$scope','$state'];
    function AppCtrl($scope,$state) {
        var vm = this;
        console.log('works')

        activate();

        ////////////////

        function activate() {
            $state.go('app.home');
         }
    }
})();