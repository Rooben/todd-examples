function observeAttributesController(){
  this.count = 0;
  this.increment = function(){
    this.count++;
  };
  this.decrement = function(){
    this.count--;
  };

  this.updateName = function(){
    if(this.name === 'Food Counter'){
      this.name = 'Drink Counter';
    }else{
      this.name = 'Food Counter';
    }
  };
};



angular
  .module('observeAttributes', [])
  .controller('observeAttributesController', observeAttributesController);
