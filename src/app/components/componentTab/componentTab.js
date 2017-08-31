var componentTab = {
  bindings: {
    label: '@'
  },
  require: {
    parent: '^^componentsTab'
  },
  transclude: true,
  templateUrl: 'componentTab.html',
  controller: function(){
    this.tab = {
      label: this.label,
      selected: false
    };
    this.$onInit = function(){
      this.parent.addTab(this.tab);
      console.log(this.parent);
    };
  }

};


angular
  .module('componenttab', [])
  .component('componentTab', componentTab);

