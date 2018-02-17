(function() {
  function TodoService(TodoService) {
    // var todoList = [];
    return {
      getData: getData,
      setData: setData
    }
    function getData(taskList) {
      todoList = taskList;
    }
    function setData(taskForm) {
      // return inputListItems;
      return todoList;
    }

    // vm.addItem = function(item) {
    //   vm.todoList.push(item);
    //   console.log(vm.todoList);
    // }
    // vm.removeItem = function($index) {
    //   vm.todoList.splice($index, 1);
    //   console.log("working")
    // }

  }
  angular
    .module("app")
    .factory("TodoService", TodoService);
})();
