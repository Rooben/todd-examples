var componentsRoute = {
  templateUrl: './componentsRoute.html'
};


angular
  .module('componentsRoute', ['ui.router'])
  .config(function($stateProvider){
    $stateProvider
    .state('components', {
      url: '/components',
      component: 'componentsRoute'
    });
  })
  .component('componentsRoute', componentsRoute);
