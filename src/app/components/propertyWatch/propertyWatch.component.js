var propertyWatch = {
  templateUrl: './propertyWatch.html',
  controller: function(){
    this.count = 0;
    this.name = 'Drink Counter';
    this.increment = function(){
      this.count++;
    };
    this.decrement = function(){
      this.count--;
    };

    this.updateName = function(){
      this.name = 'Food Counter';
    };
  }
};

angular
  .module('propertyWatch')
  .component('propertyWatch', propertyWatch);
