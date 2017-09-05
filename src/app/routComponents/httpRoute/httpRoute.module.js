var httpDemosRoute = {
  templateUrl: './httpRoute.html'
};


angular
  .module('httpDemosRoute', ['ui.router'])
  .config(function($stateProvider){
    $stateProvider
    .state('httpdemos', {
      url: '/httpdemos',
      component: 'httpDemosRoute'
    });
  })
  .component('httpDemosRoute', httpDemosRoute);
