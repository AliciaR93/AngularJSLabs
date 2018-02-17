(function() {
  var taskForm = {
    templateUrl: "templates/taskForm.html",

    controller: function(TodoService) {
      // var vm = this;
      vm.todoList = function(item) {
        TodoService.getData(item);
      };
  }
};

  angular
    .module("app")
    .component("taskForm", taskForm);
})();
