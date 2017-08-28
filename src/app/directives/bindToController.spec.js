describe('bindtocontroller directive test', function(){
  var $scope, $compile, $rootScope;
  beforeEach(module('components'));

  beforeEach(inject(function($injector){
    $compile = $injector.get('$compile');
    $controller = $injector.get('$controller');
    $rootScope = $injector.get('$rootScope');
    $scope = $rootScope.$new();
    $controller = $controller('BindtocontrollerController as counter', {$scope: $scope});
  }));

  it('should contain the right text', function(){
    $controller.count = 0;
    $controller.increment();
    var element = $compile('<bindtocontroller></bindtocontroller>')($rootScope);
    $rootScope.$digest();
    expect(element[0].querySelector('.panel').innerHTML).toContain('Counter: 1');
  });

});


