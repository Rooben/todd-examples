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

        this.$onInit = function(){
            this.parentComponent.addTab(this.tab);
        };

        this.$onDestroy = function(){
            //unbind events here
        }
    }
};

angular
    .module('componentTab', [])
    .component('componentTab', componentTab);
