// <!-- create getter function from controller-->
//When form controller is ran, we create array or todo list thats empty,
//we create an add item function with a parameter of item.
//we push the items in the todo list that the user typed, push them to html?
//get the addToDo items and assign them an empty string value(because it will
//be what the user types in as there todo)
(function() {
  function FormController() {
    var vm = this;
    vm.todoList = [];
    vm.addItem = function(item) {
      vm.todoList.push(item);
      document.getElementById("addToDo").value = "";
    }
    vm.removeItem = function(index){
    vm.todoList.splice(index, 1)
  };
  }
  // (function() {
  //   function xbtn() {
  //     vm.removeItem = function(item) {
  //     vm.todoList.splice(item, 1);
  //     console.log("working");
  //     }
  //   }
  // })
  angular
    .module("app")
    .controller("FormController", FormController);
})();
