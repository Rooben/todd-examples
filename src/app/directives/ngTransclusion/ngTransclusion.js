function NgTransclusionController(){

}


function ngTransclusion(){
  return {
    transclude: true,
    templateUrl: './ngTransclusion.html'
  }
};


angular
  .module('ngtransclusion', [
  ])
  .controller('NgTransclusionController', NgTransclusionController)
  .directive('ngTransclusion', ngTransclusion);

