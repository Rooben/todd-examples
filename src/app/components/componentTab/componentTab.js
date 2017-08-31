var componentTab = {
  bindings: {
    label: '@'
  },
  require: {
    componentsTab: '^^componentsTab'
  },
  transclude: true,
  templateUrl: './componentTab.html',
  controller: function(){
    this.tab = {
      label: this.label,
      selected: false
    };
    this.$onInit = function(){
      this.tabs.addTab(this.tab);
    };
  }

};


angular
  .module('componenttab', [])
  .component('componentTab', componentTab);

