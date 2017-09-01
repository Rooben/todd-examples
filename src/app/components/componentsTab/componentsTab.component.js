var componentsTab = {
    transclude: true,

    controller: function(){
        this.tabs = [];
        this.addTab = function addTab(tab){
            if(!this.tabs.length){ // This is work around for the this.selectTab(0)  in the $postLink hook.
                tab.selected = true;
            }
            this.tabs.push(tab);
        };
        this.selectTab = function selectTab(index){
            for(var i=0; i < this.tabs.length; i++){
                this.tabs[i].selected = false;
            }

            this.tabs[index].selected = true;
        }

        /*this.$postLink = function(){  // This did not work, looks like this lifecycle hook did not fire;
          this.selectTab(0);
        };*/
    },
    templateUrl: './componentsTab.html'
};


angular
    .module('componentsTab', [])
    .component('componentsTab', componentsTab);
