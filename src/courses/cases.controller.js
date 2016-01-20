module.exports = function(ngModule) {
  'use strict';

  ngModule.controller('CasesController', CasesController);

  CasesController.$inject = ['$stateParams'];

  function CasesController($stateParams) {
    var vm = this;
    vm.courseId = $stateParams.courseId;
  }
};
