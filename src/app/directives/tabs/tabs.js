function TabsController(){

}


function tabs(){
  return {
    transclude: true,
    templateUrl: './tabs.html',
    controller: function(){
      var ctrl = this;
      ctrl.list = [];
      ctrl.addTab = function(tab){
        if(!ctrl.list.length){
          tab.selected = true;
        }
        ctrl.list.push(tab);
      };
      ctrl.selectTab = function(index){
        ctrl.list.forEach(function(tab){
          tab.selected = false;
        });

        ctrl.list[index].selected = true;
      }
    },
    controllerAs: 'tabs'
  }
};


angular
  .module('tabs', [])
  .controller('TabsController', TabsController)
  .directive('tabs', tabs);

