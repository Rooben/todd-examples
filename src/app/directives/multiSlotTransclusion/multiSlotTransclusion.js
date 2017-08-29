function MultislottranscludeController(){

}


function multiSlotTransclude(){
  return {
    // Give name slots for our transclusions
    transclude: {
      name: '?h1',
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

