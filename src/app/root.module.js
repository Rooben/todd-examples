function RootController(){
    this.count = 0;
    this.name = 'Drink Counter';
}


angular
  .module('root', [
    'common',
    'templates',
    'directives.module',
    'components.module'
  ]).controller('RootController', RootController);
