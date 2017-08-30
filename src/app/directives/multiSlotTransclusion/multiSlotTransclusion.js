function MultislottranscludeController(){

}


function multiSlotTransclude(){
  return {
    // Give name slots for our transclusions
    transclude: {
      name: '?h1', // I have added a '?' here just to let it not break the rest of the code, as was the case. Consequently, the name text does not show.
      desc: '?p'
    },
    templateUrl: './multiSlotTransclusion.html'
  }
};


angular
  .module('multislottransclude', [
  ])
  .controller('MultislottranscludeController', MultislottranscludeController)
  .directive('multiSlotTransclude', multiSlotTransclude);

