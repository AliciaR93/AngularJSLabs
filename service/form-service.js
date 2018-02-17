(function() {
  function TodoService() {
    var todoList = [];
    return {
      getData: getData,
      setData: setData
    }
    function getData() {
      return todoList;
    }
    function setData(list) {
      todoList = list;
    }
  }
  angular
    .module("app")
    .factory("TodoService", TodoService);
})();
