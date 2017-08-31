var componentsTab = {
  transclude: true,
  templateUrl: './componentsTab.html',
  controller: function(){
    this.tabs = [];
    this.addTab = function(tab){
      if(!this.tabs.length){
        tab.selected = true;
      }
      this.list.push(tab);
    };
    this.selectTab = function selectTab(index){
      for(var i=0; i < this.tabs.length; i++){
        this.tabs[i].selected = false;
      }

      this.tabs[index].selected = true;
    }
  }
};


angular
  .module('componentstab', [])
  .component('componentsTab', componentsTab);

