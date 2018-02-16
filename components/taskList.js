(function() {
  var taskList = {

    templateUrl: "templates/taskList.html",
    controller: function (TodoService){
      var vm = this;
      vm.todoList = [];

      vm.addItem = function(item) {
        // vm.todoList.push(item);
        // console.log(vm.todoList);
        // vm.item =""
        //use in service 10-12
        TodoService.getData(item)
    }
     vm.removeItem =function($index) {
       vm.todoList.splice($index, 1);
       console.log("working")
    }
    }
  }
  angular
    .module("app")
    .component("taskList", taskList);

}());
