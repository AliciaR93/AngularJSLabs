(function() {
  var taskForm = {

    templateUrl: "templates/taskForm.html",
    controller: function(TodoService) {
      var vm = this;
      vm.todoList =[];

  }
}
  angular
    .module("app")
    .component("taskForm", taskForm);

})();
