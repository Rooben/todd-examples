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
  var $scope, $compile, $rootScope, element, RootController;

  beforeEach(module('root'));

  beforeEach(inject(function($injector){
    $compile = $injector.get('$compile');
    $controller = $injector.get('$controller');
    $rootScope = $injector.get('$rootScope');
    $scope = $rootScope.$new();
    element = angular.element('<observe-attributes></observe-attributes>');

    RootController = $controller('RootController as counter', {$scope: $scope});
  }));


  it('controller should contain increment method', function(){
    expect(RootController.increment).toBeDefined();
  });

  it('should contain the right text', function(){
    RootController.count = 0;
    spyOn(RootController, 'increment').and.callThrough();
    RootController.increment();
    $compile(element)($rootScope);
    $rootScope.$digest();
    expect(RootController.increment).toHaveBeenCalled();
    expect(RootController.count).toEqual(1);
    //expect(element[0].querySelector('.panel').innerHTML).toContain('Counter: 1');
   });

});

