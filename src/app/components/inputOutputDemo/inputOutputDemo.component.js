var inputOutputDemo = {
  templateUrl: './inputOutputDemo.html',
  controller: function() {

    this.weatherRecords = [
      {
        site: 'Abu Gotta Ramada',
        location: 'Hurghada, Egypt',
        temperature: '72F',
        time: '12:00'
      },
      {
        site: 'Ponte Mahoon',
        location: 'Maehbourg Mauritius',
        temperature: '45F',
        time: '15:00'
      },
      {
        site: 'Molnar Cave',
        location: 'Budapest, Hungary',
        temperature: '39F',
        time: '9:00'
      }
    ];

    this.selectedRecord = {};
    // I could have used $onChanges life cycle hook here, but for some reason, it did not trigger.
    this.selectRecord = function(returnedObject){
      if(returnedObject){
        this.selectedRecord = angular.copy(returnedObject);
      }
    }
  }
};

var inputOutputChild = {
  templateUrl: './inputOutputChild.html',
  bindings:{
    record: '<',
    selectLabel: '@',
    onSelect: '&'
  },
  controller: function() {
    this.editing = false;
    this.enableEditing = function(){
      this.editing = true;
    }
    this.closeEditing = function(){
      this.editing = false;
    }
  }
};


angular
  .module('inputOutputDemo', [])
  .component('inputOutputChild', inputOutputChild)
  .component('inputOutputDemo', inputOutputDemo);
