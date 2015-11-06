(function() {
    'use strict';

    angular
        .module('TmApp')
        .controller('WebinarsController', WebinarsController);

    WebinarsController.$inject = ['$stateParams'];

    function WebinarsController($stateParams) {
      var vm = this;
      vm.courseId = $stateParams.courseId;
    }
})();
