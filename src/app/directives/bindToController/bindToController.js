function BindtocontrollerController(){
  //Bind to controller means bind to the controller of the parent scope,
  // So the this.count would no longer be needed since it will be received from the parent scope.

  this.increment = function(){
    this.count++;
  }
  this.decrement = function(){
    this.count--;
  }
}


function bindtocontroller(){
  return {
    scope: {},
    bindToController: {
      count: '='
    },
    templateUrl: './bindToController.html',

    controller: 'BindtocontrollerController as bindCtrl'
  }
};


angular
  .module('bindtocontroller', [
  ])
  .controller('BindtocontrollerController', BindtocontrollerController)
  .directive('bindtocontroller', bindtocontroller);

