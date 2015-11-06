(function() {
    'use strict';

    angular
        .module('TmApp')
        .controller('QuizesController', QuizesController);

    QuizesController.$inject = ['$stateParams'];

    function QuizesController($stateParams) {
      var vm = this;
      vm.courseId = $stateParams.courseId;
    }
})();
