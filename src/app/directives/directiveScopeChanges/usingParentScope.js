function UsingParentScopeController($scope){
  $scope.greeting = 'Welcome';
}

function usingParentScope(){
  return {
    scope: false, //Because scope is set to false, the greeting text gets set in the parent scope
    restrict: 'A',
    link: function($scope, $element, $attrs){
      $scope.sayHello = function(greeting){
        $scope.greeting = greeting;
      }
    }
  }
};


angular
  .module('usingparentscope', [
  ])
  .controller('UsingParentScopeController', UsingParentScopeController)
  .directive('usingParentScope', usingParentScope);

