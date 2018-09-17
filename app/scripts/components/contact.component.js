(function() {
    'use strict';

    // Usage:
    // 
    // Creates:
    // 

    angular
        .module('aariyahcoutureApp')
        .component('contact', {
            // template:'htmlTemplate',
            templateUrl: 'views/contact.html',
            controller: ContactController,
            controllerAs: '$ctrl',
            bindings: {
                Binding: '=',
            },
        });

        ContactController.$inject = ['$scope','$http'];
    function ContactController($scope,$http) {
        var $ctrl = this;
        

        var options = {
            

            center: new google.maps.LatLng(18.560591,73.809101),
            zoom: 17,
            disableDefaultUI: true    
        }
        this.map = new google.maps.Map(
            $("#pmap")[0], options
        );



        $scope.bookingForm=function(){
            console.log($scope.schedule);

            $http({
                method:'POST',
                url: 'https://docs.google.com/forms/d/e/1FAIpQLScn7-2D9rmKZTrGT1CssCqTsaoiZ-E21LP4grW8UpGaRNWrLw/formResponse',
                data:$scope.schedule,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},

            }).success(function(response) {
                alert('yes');
            }).error(function(response) {
                alert('no');
            });
        };
        
        ////////////////

        $ctrl.$onInit = function() { };
        $ctrl.$onChanges = function(changesObj) { };
        $ctrl.$onDestroy = function() { };
    }
})();