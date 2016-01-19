(function() {
  'use strict';

  angular
    .module('TmApp')
    .controller('TopicController', TopicController);

  function TopicController($state, $stateParams, dataservice) {
    var vm = this;

    vm.topics = dataservice.topics();
    vm.selectedId = $stateParams.topicId;
    for (var i = 0; i < vm.topics.length - 1; ++i) {
      if (vm.topics[i].id == vm.selectedId) {
        vm.afterSelectedId = vm.topics[i + 1].id;
        break;
      }
    }
    vm.go = function(topicId) {
      $state.go('topic.info', {
        'topicId': topicId
      });
    };
  }
})();
