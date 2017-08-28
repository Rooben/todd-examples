function RootController($scope){
  this.count = 0;
  this.name = 'Drink Counter';

  this.updateName = function(){
    if(this.name === 'Food Counter'){
      this.name = 'Drink Counter';
    }else{
      this.name = 'Food Counter';
    }
  };

  this.increment = function(){
    this.count++;
  };
  this.decrement = function(){
    this.count--;
  };
};



function observeAttributes(){
  return {
    template: `<div class="component-container">
      <h2>Angular $attr.$observe </h2>
      <div ng-controller="RootController as observAttr">
      <span class="panel">Counter: {{observAttr.count}}</span>
      <button href="" ng-click="observAttr.increment()">Increment Counter</button>
      <button href="" ng-click="observAttr.decrement()">Decrement Counter</button>
      <div>
        <button><a href="" ng-click="observAttr.updateName()">Update Name</a></button>
        </div>
        {{observAttr.name}}
      </div>
    </div>`,

    link: function($scope, $element, $attrs){
      $attrs.$observe('name', function(value){
        if(value === 'Drink Counter'){
          $attrs.$updateClass('counter-drink', 'counter-food');
        }else if(value === 'Food Counter'){
          $attrs.$updateClass('counter-food', 'counter-drink');
        }
      });
    },
  }
};


angular
  .module('root', [
    'common',
    'components',
    'templates'
  ])
  .controller('RootController', RootController)
  .directive('observeAttributes', observeAttributes);
