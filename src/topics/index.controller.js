module.exports = function(ngModule) {
  'use strict';

  ngModule.controller('IndexController', IndexController);

  /* @ngInject */
  function IndexController($scope, $state, $stateParams, $timeout,
                           dataservice) {
    var vm = this;
    var options =
        {slidesToShow: 3, slidesToScroll: 1, dots: true, infinite: false};

    var topics = dataservice.topics();
    var pairs = [];
    var pair = [];
    for (var i = 0; i < topics.length; ++i) {
      if (i > 0 && i % 2 == 0) {
        pairs.push(pair);
        pair = [];
      }
      pair.push(topics[i]);
    }

    if (pair.length > 0) {
      pairs.push(pair);
    }

    vm.pairs = pairs;
    $timeout(function() {
      $('.slick').slick(options);

      var hoverItemIn = function() {
        $(this).addClass("slick__subitem--hover");
        $(".slick__subitem"). not(this).addClass("slick__subitem--nothover");
      };

      var hoverItemOut = function() {
        $(this).removeClass("slick__subitem--hover");
        $(".slick__subitem"). not(this).removeClass("slick__subitem--nothover");
      };

      $('.slick__subitem').hoverIntent(hoverItemIn, hoverItemOut);

    });

    vm.go =
        function(topicId) { $state.go('topic.info', {'topicId': topicId}); };
  }
};
