'use strict';

/**
 * @ngdoc overview
 * @name aariyahcoutureApp
 * @description
 * # aariyahcoutureApp
 *
 * Main module of the application.
 */
angular
  .module('aariyahcoutureApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ui.router',
    'ngTouch'
  ])
  .config(function ($stateProvider) {
    


    $stateProvider
      .state('app', {
        url:'',
        abstract: true,
        templateUrl: 'views/app.html'
      })
      .state('app.home', {
        url:'/home',
        component: 'home'
      })
      .state('app.category', {
        url:'/category',
        component: 'category'
      })
      .state('app.achive', {
        url:'/achive',
        component: 'achive'
      })
      .state('app.pages-single-blogs', {
        url:'/blogs',
        component: 'pagesBlogs'
      })
      .state('app.pages-elements', {
        url:'/elements',
        component: 'pagesElements'
      })
      .state('app.contact', {
        url:'/contact',
        component: 'contact'
      })
  });
