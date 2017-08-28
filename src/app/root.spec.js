describe('RootController test', function(){
  var $controller, $scope, CounterController, $rootScope;
  beforeEach(module('root'));

  beforeEach(inject(function($injector){
    $controller = $injector.get('$controller');
    $rootScope = $injector.get('$rootScope');
    $scope = $rootScope.$new();
    CounterController = $controller('RootController as counter', {$scope: $scope});
  }));

  it('increment the count property', function(){
    CounterController.increment();
    expect(CounterController.count).toEqual(1);
  });

  it('decrement the count property', function(){
    CounterController.decrement();
    expect(CounterController.count).toEqual(-1);
  });

  it('Toggle the name property', function(){
    var name = 'Drink Counter';
    CounterController.updateName();
    expect(CounterController.name).toEqual('Food Counter');
  });

});


describe('observeAttributes directive test', function(){
  var $scope, $compile, $rootScope;
  beforeEach(module('root'));

  beforeEach(inject(function($injector){
    $compile = $injector.get('$compile');
    $controller = $injector.get('$controller');
    $rootScope = $injector.get('$rootScope');
    $scope = $rootScope.$new();
    $controller = $controller('RootController as counter', {$scope: $scope});
  }));

  it('should contain the right text', function(){
    $scope.count = 0;
    $scope.increment();
    var element = $compile('<observe-attributes></observe-attributes>')($rootScope);
    $rootScope.$digest();
    expect(element.html()).toContain('Counter: 1');
   });

});

