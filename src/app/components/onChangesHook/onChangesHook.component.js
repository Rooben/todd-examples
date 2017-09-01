var onChangesHook = {
    templateUrl: './onChangesHook.html',
    controller: function(){
        this.user = {
            name: 'Roland Oben',
            location: 'Toronto Canada'
        };

        this.updateUser = function(event){
            this.user = event.user;
            console.log(this.user);
        }
    }
};

angular
    .module('onChangesHook', [])
    .component('onChangesHook', onChangesHook);