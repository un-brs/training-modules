module.exports = function(ngModule) {
  'use strict';

  ngModule.controller('TopicInfoController', TopicInfoController);

  function TopicInfoController($stateParams, dataservice) {
    var vm = this;
    vm.related = dataservice.topics().slice(0, 3);
  }
};
