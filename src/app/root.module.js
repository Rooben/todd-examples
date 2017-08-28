var RootController = function(){
  this.name = 'Drink Counter';

  this.updateName = function(){
    this.name = 'Food Counter';
    console.log(this.name);
  };
};




angular
  .module('root', [
    'common',
    'components',
    'templates'
  ])
  .controller('RootController', RootController);
