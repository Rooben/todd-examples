var componentsTab = {
    transclude: true,

    controller: function(){
        this.tabs = [];
        this.addTab = function addTab(tab){
            /*if(!this.tabs.length){
                tab.selected = true;
            }*/
            this.tabs.push(tab);
        };
        this.selectTab = function selectTab(index){
            for(var i=0; i < this.tabs.length; i++){
                this.tabs[i].selected = false;
            }

            this.tabs[index].selected = true;
        }

    },
    templateUrl: './componentsTab.html'
};


angular
    .module('componentsTab', [])
    .component('componentsTab', componentsTab);