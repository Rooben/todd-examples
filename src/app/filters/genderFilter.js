function genderFilter(){
  return function(collection, gender){
    var filtered = [];
    if(!gender){
      return collection;
    }
    // --------- Alternative 1
    /* for(var i = 0; i < collection.length; i++){
      if(collection[i].gender === gender){
        filtered.push(collection[i]);
      }
    }
    return filtered;
    */

    // Alternative 2 (The javaScript filter method)
    return collection.filter(function(value){
      return value.gender === gender;
    });
  }
}


angular.module('genderFilter', [])
  .filter('gender', genderFilter);
