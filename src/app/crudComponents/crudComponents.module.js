var toDoComponent = {
  templateUrl: './toDoComponent.html'
};


function ToDoController(TodoService){

  var ctrl = this;

  ctrl.title = '';

  ctrl.list = TodoService.query();


  ctrl.addTodo = function(){
    var newTodo = new TodoService;
    newTodo.title = ctrl.title;
    newTodo.completed = false;
    newTodo.userId = 9;
    newTodo.$save(function(){
      ctrl.list.unshift(newTodo);
    });
  };

  ctrl.deleteTodo = function(todo){
    todo.$delete(function(){
      ctrl.list = ctrl.list.filter(function(item){
        return item.id !== todo.id;
      });
    });
  };

  ctrl.updateTodo = function(todo){
    todo.$update(function(){
      console.log('Updated!', todo);
    });
  };

  ctrl.singleTodo = TodoService.get({
    id: 1
  });

}



angular
  .module('crudComponents.module', [
    'ngResource'
  ])
  .controller('ToDoController', ToDoController)
  .component('toDoComponent', toDoComponent);
