describe('PropertyWatchController test', function(){
  var $controller, $scope, CounterController, $rootScope;
  beforeEach(module('propertyWatch'));

  beforeEach(inject(function($injector){
    $controller = $injector.get('$controller');
    $rootScope = $injector.get('$rootScope');
    $scope = $rootScope.$new();
    CounterController = $controller('PropertyWatchController as propCtrl', {$scope: $scope});
  }));

  it('increment the count property', function(){
    console.log(CounterController);
    CounterController.increment();
    expect(CounterController.count).toEqual(1);
  });

  it('decrement the count property', function(){
    console.log(CounterController);
    CounterController.decrement();
    expect(CounterController.count).toEqual(-1);
  });

});
