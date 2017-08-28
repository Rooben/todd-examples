var observeAttributes = function(){
  return {
    templateUrl: './observeAttributes.html',
    scope: {
      update: '&'
    },
    link: function($scope, $element, $attrs){
      $attrs.$observe('name', function(value){
        if(value === 'Drink Counter'){
          alert('Drink');
          $attrs.$updateClass('counter-food', 'counter-drink');
        }else if(value === 'Drink Counter'){
          alert('Food');
          $attrs.$updateClass('counter-drink', 'counter-food');
        }
      });
    },
    controller: 'RootController as rootCtrl'
  }
};

angular
  .module('observeAttributes')
  .directive('observeAttributes', observeAttributes);
