(function() {
  'use strict';
  angular.module('TmApp').config(
    function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise("/");
      $stateProvider
        .state('index', {
          url: '/',
          templateUrl: "app/topics/index.html",
          controller: 'IndexController as vm'
        })
        .state('topic', {
          url: '/topic/:topicId',
          abstract: true,
          templateUrl: "app/topics/topic.html",
          controller: 'TopicController as vm'
        }).state('topic.info', {
            url: '',
            templateUrl: "app/topics/topic-info.html",
            controller: 'TopicInfoController as vm'
          }

        ).state('topic.course', {
          url: '/course/:courseId',
          templateUrl: "app/courses/course.html",
          controller: 'CourseController as vm'
        }).state('topic.docs', {
          url: '/docs/:courseId',
          templateUrl: 'app/courses/docs.html',
          controller: 'DocsController as vm'
        }).state('topic.cases', {
          url: '/cases/:courseId',
          templateUrl: "app/courses/cases.html",
          controller: 'CasesController as vm'
        }).state('topic.webinars', {
          url: '/webinars/:courseId',
          templateUrl: "app/courses/webinars.html",
          controller: 'WebinarsController as vm'
        }).state('topic.workshops', {
          url: '/workshops/:courseId',
          templateUrl: "app/courses/workshops.html",
          controller: 'WorkshopsController as vm'
        }).state('topic.quizes', {
          url: '/quizes/:courseId',
          templateUrl: "app/courses/quizes.html",
          controller: 'QuizesController as vm'
        });
    }
  );

})();
