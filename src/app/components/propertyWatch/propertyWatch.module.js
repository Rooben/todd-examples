function PropertyWatchController($scope){
  this.count = 0;
  this.name = 'Drink Counter';
  this.increment = function(){
    this.count++;
  };
  this.decrement = function(){
    this.count--;
  };

  $scope.$watch(angular.bind(this, function(){return this.count;}), function(newValue, oldValue){
      console.log(newValue + ' <- ' + oldValue);
    }
  );

};



angular
  .module('propertyWatch', [])
  .controller('PropertyWatchController', PropertyWatchController);
