(function() {
    'use strict';

    angular
        .module('TmApp')
        .controller('DocsController', DocsController);

    DocsController.$inject = ['$stateParams', 'dataservice'];

    function DocsController($stateParams, dataservice) {
      var vm = this;
      vm.docs = dataservice.docs();
      vm.courseId = $stateParams.courseId;
    }
})();
