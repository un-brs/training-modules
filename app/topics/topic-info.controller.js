(function() {
  'use strict';

  angular
    .module('TmApp')
    .controller('TopicInfoController', TopicInfoController);

  function TopicInfoController($stateParams, dataservice) {
    var vm = this;
    vm.related = dataservice.topics().slice(0, 3);
  }
})();
