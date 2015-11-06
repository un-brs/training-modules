/* jshint browser: true */
/* globals angular: false */
/* jshint devel: true */
/*jshint -W087 */

angular.module('TmApp',['ui.router', ]);
angular.module('TmApp').config(
  function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
      .state('index',
        {
          url: '/',
          templateUrl: "partials/index.tmpl.html",
          controller: 'tmIndexController as vm'
        }
      )
      .state('topic',
        {
          url: '/topic/:topicId',
          abstract: true,
          templateUrl: "partials/topic.tmpl.html",
          controller: 'tmTopicController as vm'
        }
      ).state('topic.info',
        {
          url: '',
          templateUrl: "partials/topic.info.tmpl.html",
          controller: 'tmTopicInfoController as vm'
        }

      ).state('topic.course',
        {
          url: '/course/:courseId',
          templateUrl: "partials/topic.course.tmpl.html",
          controller: 'tmTopicCourseController as vm'
        }
      ).state('topic.docs',
        {
          url: '/docs/:courseId',
          templateUrl: "partials/topic.docs.tmpl.html",
          controller: 'tmCourseDocsController as vm'
        }
      ).state('topic.cases',
        {
          url: '/cases/:courseId',
          templateUrl: "partials/topic.cases.tmpl.html",
          controller: 'tmCourseCasesController as vm'
        }
      ).state('topic.webinars',
        {
          url: '/webinars/:courseId',
          templateUrl: "partials/topic.webinars.tmpl.html",
          controller: 'tmCourseWebinarsController as vm'
        }
      ).state('topic.workshops',
        {
          url: '/workshops/:courseId',
          templateUrl: "partials/topic.workshops.tmpl.html",
          controller: 'tmCourseWorkshopsController as vm'
        }
      ).state('topic.quizes',
        {
          url: '/quizes/:courseId',
          templateUrl: "partials/topic.quizes.tmpl.html",
          controller: 'tmCourseQuizesController as vm'
        }
      );
  }
);

angular.module('TmApp').controller('tmIndexController', TmIndexController);
angular.module('TmApp').service('tmDataService', TmData);

function TmIndexController($scope, $state, $stateParams, $timeout, tmDataService) {
  var vm = this;
  var options = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    infinite: false
  };

  var topics = tmDataService.topics();
  var pairs = [];
  var pair = [];
  for (var i=0; i < topics.length; ++i) {
    if ( i > 0 && i % 2 == 0) {
      pairs.push(pair);
      pair = [];
    }
    pair.push(topics[i]);
  }

  if (pair.length > 0) {
    pairs.push(pair);
  }

  vm.pairs = pairs;
  $timeout(
    function() {
      $('.slick').slick(options);

      var hoverItemIn = function () {
        $(this).addClass("slick__subitem--hover");
        $(".slick__subitem").not(this).addClass("slick__subitem--nothover");
      };

      var hoverItemOut = function() {
          $(this).removeClass("slick__subitem--hover");
          $(".slick__subitem").not(this).removeClass("slick__subitem--nothover");
      };

      $('.slick__subitem').hoverIntent(hoverItemIn, hoverItemOut);

    }
  );

  vm.go = function(topicId) {
    $state.go('topic.info', {'topicId': topicId});
  };
}

angular.module('TmApp').controller('tmTopicController', TmTopicController);

angular.module('TmApp').controller('tmTopicInfoController', TmTopicInfoController);
angular.module('TmApp').controller('tmTopicCourseController', TmTopicCourseController);

angular.module('TmApp').controller('tmCourseDocsController', TmCourseDocsController);
angular.module('TmApp').controller('tmCourseCasesController', TmCourseCasesController);
angular.module('TmApp').controller('tmCourseWebinarsController', TmCourseWebinarsController);
angular.module('TmApp').controller('tmCourseWorkshopsController', TmCourseWorkshopsController);
angular.module('TmApp').controller('tmCourseQuizesController', TmCourseQuizesController);

function TmTopicController($state, $stateParams, tmDataService) {
  var vm = this;

  vm.topics = tmDataService.topics();
  vm.selectedId = $stateParams.topicId;
  for (var i = 0; i < vm.topics.length - 1; ++i) {
    if (vm.topics[i].id == vm.selectedId) {
      vm.afterSelectedId = vm.topics[i + 1].id;
      break;
    }
  }
  vm.go = function(topicId) {
    $state.go('topic.info', {'topicId': topicId});
  };
}

function TmTopicInfoController($stateParams, tmDataService) {
  var vm = this;
  vm.related = tmDataService.topics().slice(0,3);
}

function TmTopicCourseController($state, $stateParams, tmDataService) {
  var vm = this;
  vm.courses = tmDataService.courses($stateParams.topicId);
  vm.selected = $stateParams.courseId ? $stateParams.courseId: vm.courses[0].id;
  vm.related = tmDataService.related(vm.selected);

  var hoverActionIn = function() {
    $(this).attr('src', $(this).attr('src').replace('a_', 'r_'));
  };

  var hoverActionOut = function() {
    $(this).attr('src', $(this).attr('src').replace('r_', 'a_'));
  };

  $('.course-content__action img').hover(hoverActionIn, hoverActionOut);


  vm.go = function(courseId) {
    $state.go('topic.course', {'courseId': courseId});
  };
}

function TmCourseDocsController($stateParams) {
  var vm = this;
  vm.courseId = $stateParams.courseId;
}

function TmCourseCasesController($stateParams) {
  var vm = this;
  vm.courseId = $stateParams.courseId;
}

function TmCourseWebinarsController($stateParams) {
  var vm = this;
  vm.courseId = $stateParams.courseId;
}

function TmCourseWorkshopsController($stateParams) {
  var vm = this;
  vm.courseId = $stateParams.courseId;
}

function TmCourseQuizesController($stateParams) {
  var vm = this;
  vm.courseId = $stateParams.courseId;
}

function TmData() {

  var topics = [
    {
      'title': 'Overview',
      'id': 1
    },
    {
      'title': 'Reporting and other notifications',
      'id': 2
    },
    {
      'title': 'Wastes',
      'id': 3
    },
    {
      'title': 'POPs',
      'id': 4
    },
    {
      'title': 'Chemicals',
      'id': 5
    },
    {
      'title': 'National plans and strategies',
      'id': 6
    },
    {
      'title': 'Test 1',
      'id': 7
    },
    {
      'title': 'Test 2',
      'id': 8
    },
    {
      'title': 'Test 3',
      'id': 9
    },
  ];

  var courses = function(topicId) {
    var result = [];
    angular.forEach([1,2,3,4,5],
      function(item) {
        result.push(
          {
            'id': item,
            'title': 'Course ' + item,
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet tempus nisi. Sed ullamcorper mauris eget venenatis tempor.'
          }
        );
      }
    );
    return result;
  };

  var related = function(courseId) {
    var result = [];
    angular.forEach([1,2,3,4,5],
      function(item) {
        result.push(
          {
            'id': item,
            'topicId': item,
            'title': 'Related course ' + item
          }
        );
      }
    );
    return result;
  };

  return {
    'topics': function() { return topics;},
    'courses': courses,
    'related': related
  };

}


// $(document).ready(function(){
//   var options = {
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     dots: true,
//     infinite: false
//   };
//
//   $('.slick').slick(options);
//
//   var hoverItemIn = function () {
//     $(this).addClass("slick__subitem--hover");
//     $(".slick__subitem").not(this).addClass("slick__subitem--nothover");
//   };
//
//   var hoverItemOut = function() {
//       $(this).removeClass("slick__subitem--hover");
//       $(".slick__subitem").not(this).removeClass("slick__subitem--nothover");
//   };
//
//   var hoverActionIn = function() {
//     $(this).attr('src', $(this).attr('src').replace('a_', 'r_'));
//   };
//
//   var hoverActionOut = function() {
//     $(this).attr('src', $(this).attr('src').replace('r_', 'a_'));
//   };
//
//   var onTopicListClick = function () {
//     var template = kendo.template($("#tmpl-topic-info").html());
//     $(".topic-list__item").removeClass("topic-list__item--active");
//     $(".topic-list__item").removeClass("topic-list__item--afteractive");
//     $(".topic-info").remove();
//
//     $(this).addClass("topic-list__item--active");
//     // debugger;
//     $(this).next(".topic-list__item").addClass("topic-list__item--afteractive");
//     $(this).after(template({}));
//
//   };
//
//   $('.slick__subitem').hoverIntent(hoverItemIn, hoverItemOut);
//
//   $('.course-content__action img').hover(hoverActionIn, hoverActionOut);
//
//   $('.topic-list__item').click(onTopicListClick);
//
// });
