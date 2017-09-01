var filterDemo = {
  templateUrl: './filterDemo.html',
  controller: function() {
    this.players = [
      {
        name: 'Todd Motto',
        rank: 4,
        gender: 'male'
      },
      {
        name: 'Navaeh Mckinney',
        rank: 1,
        gender: 'female'
      },
      {
        name: 'Vernon Carpenter',
        rank: 2,
        gender: 'male'
      },
      {
        name: 'Suzan Miller',
        rank: 3,
        gender: 'female'
      },
      {
        name: 'Martha Fox',
        rank: 8,
        gender: 'female'
      },
      {
        name: 'Rick Vasquez',
        rank: 7,
        gender: 'male'
      },
      {
        name: 'Larry Shaw',
        rank: 9,
        gender: 'male'
      },
      {
        name: 'Ida Shelton',
        rank: 5,
        gender: 'female'
      },
      {
        name: 'Alfred Morgan',
        rank: 6,
        gender: 'male'
      }
    ];
  }
};

angular
  .module('filterDemo', [])
  .component('filterDemo', filterDemo);
