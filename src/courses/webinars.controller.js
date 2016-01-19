(function() {
    'use strict';

    angular
        .module('TmApp')
        .controller('WebinarsController', WebinarsController);

    WebinarsController.$inject = ['$stateParams', 'dataservice'];

    function WebinarsController($stateParams, dataservice) {
      var vm = this;
      vm.webinars = dataservice.webinars();
      vm.courseId = $stateParams.courseId;
    }
})();
