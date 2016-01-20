module.exports = function(ngModule) {
  'use strict';

  ngModule.controller('DocsController', DocsController);

  DocsController.$inject = ['$stateParams', 'dataservice', 'mfilesservice'];

  function DocsController($stateParams, dataservice, mfilesservice) {
    var vm = this;
    vm.lang = "en";
    mfilesservice.documents(["E-waste"], vm.lang).then(function(result) {
      console.log(result[0]);
      vm.docs = result;
    });
    // vm.docs = dataservice.docs();
    vm.courseId = $stateParams.courseId;
  }
};
