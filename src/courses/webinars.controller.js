module.exports = function(ngModule) {
  'use strict';

  ngModule.controller('WebinarsController', WebinarsController);

  WebinarsController.$inject = ['$stateParams', 'confservice'];

  function WebinarsController($stateParams, confservice) {
    var vm = this;
    vm.webinars = confservice.webinars(['E-waste'])
                      .then(function(result) { vm.webinars = result; });
    vm.courseId = $stateParams.courseId;
  }
};
