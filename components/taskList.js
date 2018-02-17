(function() {
  var taskList = {

    templateUrl: "templates/taskList.html",

    controller: function(TodoService) {
      // var vm = this;
      vm.todoList = TodoService.setData();
      console.log(vm.todoList);
    }
  }
  angular
    .module("app")
    .component("taskList", taskList);
}());
