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
    template: `<div class="component-container">
        <h2>Angular bindToController Directives</h2>
      <div>
      <span class="panel">Counter: {{bindCtrl.count}}</span>
      <button href="" ng-click="bindCtrl.increment()">Increment Counter</button>
      <button href="" ng-click="bindCtrl.decrement()">Decrement Counter</button>
      </div>
    </div>`,

    controller: 'BindtocontrollerController as bindCtrl'
  }
};


angular
  .module('bindtocontroller', [
  ])
  .controller('BindtocontrollerController', BindtocontrollerController)
  .directive('bindtocontroller', bindtocontroller);

