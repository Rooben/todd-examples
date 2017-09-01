var statelessComponent = {
    bindings: {
        user: '<',
        onUpdate: '&'
    },
    templateUrl: './statelessComponent.html',
    controller: function(){
        this.$onChanges = function(changes){
            console.log(changes);
            if(changes.user){
                this.user = angular.copy(this.user);
            }
        };

        this.updateUser = function(){// Multiple properties can be created in the $event object and passed back to the parent
            this.onUpdate({
               $event: {
                   user: this.user
               }
            });
        }
    }
};

angular
    .module('statelessComponent', [])
    .component('statelessComponent', statelessComponent);