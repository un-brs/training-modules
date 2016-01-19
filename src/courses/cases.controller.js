(function() {
    'use strict';

    angular
        .module('TmApp')
        .controller('CasesController', CasesController);

    CasesController.$inject = ['$stateParams'];

    function CasesController($stateParams) {
      var vm = this;
      vm.courseId = $stateParams.courseId;
    }
})();
