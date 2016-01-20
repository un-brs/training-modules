module.exports = function(ngModule) {
  'use strict';

  ngModule.controller('QuizesController', QuizesController);

  QuizesController.$inject = ['$stateParams'];

  function QuizesController($stateParams) {
    var vm = this;
    vm.courseId = $stateParams.courseId;
  }
};
