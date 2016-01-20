module.exports = function(ngModule) {
  'use strict';

  ngModule.controller('WorkshopsController', WorkshopsController);

  WorkshopsController.$inject = ['$stateParams'];

  function WorkshopsController($stateParams) {
    var vm = this;
    vm.courseId = $stateParams.courseId;
  }
};
