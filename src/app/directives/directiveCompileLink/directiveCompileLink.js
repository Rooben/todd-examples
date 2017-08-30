function CompileLinkErrorController(){

  this.list = [{
                message: 'Oh no, an error occured!',
                type: 'error'
              },{
                message: 'Make sure you fill in all the fields',
                type: 'warning'
              },{
                message: 'This is invalid',
                type: 'invalid'
              }];
}


function compileLinkDirective(){
  return {
    restrict: 'A',
    compile: function($element, $attrs){ // $scope can not be passed, since during the compile phase, the $scope should not be ready
      // In here, is just the raw template being accessed with nothing linked yet.
      // This function runs just once
      $element.addClass('error'); // This base class will be added only once into the raw template before it is linked
                                  // It would be inefficient to add this in the link function, which is call multiple times per item iterated.

      return {
        pre: function($scope, $element, $attrs){
          // access to the child elements that are not linked and angular has not registered them yet

        },
        // This post function is just the normal link function, hence same params passed
        post: function($scope, $element, $attrs){
          // access to child elements that are linked
          $attrs.$addClass('error__' + $attrs.type);
        }
      };
      // Alternatively, we could return a function, which in this case would be the postlink function, just like the one above
      // This is just like the link function, which would never work when there is the compile function.
      /* return function($scope, $element, $attrs){
        $element.addClass('error-' + $attrs.type);
      }
      */
    }
  }
};


angular
  .module('directivecompilelink', [
  ])
  .controller('CompileLinkErrorController', CompileLinkErrorController)
  .directive('compileLinkDirective', compileLinkDirective);

