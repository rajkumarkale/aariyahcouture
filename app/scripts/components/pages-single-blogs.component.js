(function() {
    'use strict';

    // Usage:
    // 
    // Creates:
    // 

    angular
        .module('aariyahcoutureApp')
        .component('pagesBlogs', {
            // template:'htmlTemplate',
            templateUrl: 'views/pages-blogs.html',
            controller: PagesBlogsController,
            controllerAs: '$ctrl',
            bindings: {
                Binding: '=',
            },
        });

        PagesBlogsController.$inject = ['$scope'];
    function PagesBlogsController($scope) {
        var $ctrl = this;
        

        ////////////////

        $ctrl.$onInit = function() { };
        $ctrl.$onChanges = function(changesObj) { };
        $ctrl.$onDestroy = function() { };
    }
})();