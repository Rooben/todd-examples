function UsingIsolateScopeController($scope){
  $scope.greeting = 'Welcome(isolated)';
}

function usingIsolateScope(){
  return {
    scope: { //Each scope is now isolated
      defaultGreetingText: '=',
      greetingText: '@'
    },
    transclude: true,
    restrict: 'E',
    templateUrl: './usingIsolateScope.html',
    controller: function($scope){
      $scope.showGreeting = false;
      $scope.directiveSayHello = function(){
        $scope.showGreeting = true;
      }
    }
  }
};


angular
  .module('usingisolatescope', [
  ])
  .controller('UsingIsolateScopeController', UsingIsolateScopeController)
  .directive('usingIsolateScope', usingIsolateScope);

