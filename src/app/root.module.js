function RootController(){
    this.count = 2;
    this.name = 'Drink Counter';
}


angular
  .module('root', [
    'ui.router',
    'common',
    'templates',
    'directives.module',
    'components.module',
    'filters.module',
    'directivesRoute',
    'componentsRoute',
    'httpDemosRoute'
  ])
  .config(function($urlRouterProvider, $locationProvider){
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
  })
  .controller('RootController', RootController);
