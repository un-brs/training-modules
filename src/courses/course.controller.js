module.exports = function(ngModule) {
  'use strict';

  ngModule.controller('CourseController', CourseController);

  CourseController.$inject = ['$state', '$stateParams', 'dataservice'];

  function CourseController($state, $stateParams, dataservice) {
    var vm = this;
    vm.courses = dataservice.courses($stateParams.topicId);
    vm.selected =
        $stateParams.courseId ? $stateParams.courseId : vm.courses[0].id;
    vm.related = dataservice.related(vm.selected);

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

};
