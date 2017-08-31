function TabController(){

}


function tab(){
  return {
    scope: {},
    transclude: true,
    templateUrl: './tab.html',
    require: '^^componentsTab',
    link: function($scope, $element, $attrs, $ctrl){
      $scope.tab = {
        label: $attrs.label,
        selected: false
      };
      $ctrl.addTab($scope.tab);
    }
  }
};


angular
  .module('tab', [])
  .controller('TabController', TabController)
  .directive('tab', tab);

