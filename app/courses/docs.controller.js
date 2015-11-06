(function() {
    'use strict';

    angular
        .module('TmApp')
        .controller('DocsController', DocsController);

    DocsController.$inject = ['$stateParams'];

    function DocsController($stateParams) {
      var vm = this;
      vm.courseId = $stateParams.courseId;
    }
})();
