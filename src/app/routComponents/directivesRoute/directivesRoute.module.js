var directivesRoute = {
  templateUrl: './directivesRoute.html'
};


angular
  .module('directivesRoute', ['ui.router'])
  .config(function($stateProvider){
    $stateProvider
      .state('directives', {
        url: '/',
        component: 'directivesRoute'
      });
  })
  .component('directivesRoute', directivesRoute);
