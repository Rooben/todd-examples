describe('bindtocontroller directive test', function(){
  var $scope, $compile, $rootScope, element, BindtocontrollerController;
  beforeEach(module('bindtocontroller'));

  beforeEach(inject(function($injector){
    $compile = $injector.get('$compile');
    $controller = $injector.get('$controller');
    $rootScope = $injector.get('$rootScope');
    $scope = $rootScope.$new();
    element = angular.element('<bindtocontroller></bindtocontroller>');

    BindtocontrollerController = $controller('BindtocontrollerController as bindCtrl', {$scope: $scope});
  }));

  it('controller should contain increment method', function(){
    expect(BindtocontrollerController.increment).toBeDefined();
  });


  it('should contain the right text', function(){
    BindtocontrollerController.count = 2;
    spyOn(BindtocontrollerController, 'increment').and.callThrough();
    BindtocontrollerController.increment();
    $compile(element)($rootScope);
    $rootScope.$digest();
    expect(BindtocontrollerController.increment).toHaveBeenCalled();
    expect(BindtocontrollerController.count).toEqual(3);
    //expect(element[0].querySelector('.panel').innerHTML).toContain('Counter: 1');
  });

});


