function ManualTranscludeController(){

}


function manualTransclude(){
  return {
    transclude: true,
    templateUrl: './manualTransclude.html',
    link: function($scope, $element, $attrs, $ctrl, $transclude){
      var div = $element.find('div');
      var span = $element.find('span');
      var cloned = $transclude(); // This returns an array of node elements
      /*
      var cloned = $transclude(function(elements){// alternatively, but tried this but didn't work.
        elements[0] = elements[0].toUpperCase();
      });
      */
      span.append(cloned[0]); // cloned 0 and 1, being the list of elements between the directiv tags in the parent scope.
      div.append(cloned[1]);
    }
  }
};


angular
  .module('manualTransclude', [
  ])
  .controller('ManualTranscludeController', ManualTranscludeController)
  .directive('manualTransclude', manualTransclude);

