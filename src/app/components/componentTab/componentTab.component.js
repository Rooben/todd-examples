var componentTab = {
    bindings: {
        label: '@'
    },
    transclude: true,
    templateUrl: './componentTab.html',
    require: {
        parentComponent: '^^componentsTab'
    },
    controller: function(){
        this.tab = {
            label: this.label,
            selected: false
        };

        //console.log(this);
        this.$onInit = function(){
            this.parentComponent.addTab(this.tab);
        };
    }
};

angular
    .module('componentTab', [])
    .component('componentTab', componentTab);