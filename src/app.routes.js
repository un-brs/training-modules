module.exports = function(ngModule) {
  'use strict';
  ngModule.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider.state('index', {
                           url: '/', template: require("./topics/index.html"),
                           controller: 'IndexController as vm'
                         })
        .state('topic', {
          url: '/topic/:topicId',
          abstract: true, template: require("./topics/topic.html"),
          controller: 'TopicController as vm'
        })
        .state('topic.info', {
          url: '', template: require("./topics/topic-info.html"),
          controller: 'TopicInfoController as vm'
        })
        .state('topic.course', {
          url: '/course/:courseId', template: require("./courses/course.html"),
          controller: 'CourseController as vm'
        })
        .state('topic.docs', {
          url: '/docs/:courseId', template: require('./courses/docs.html'),
          controller: 'DocsController as vm'
        })
        .state('topic.cases', {
          url: '/cases/:courseId', template: require("./courses/cases.html"),
          controller: 'CasesController as vm'
        })
        .state('topic.webinars', {
          url: '/webinars/:courseId',
               template: require("./courses/webinars.html"),
          controller: 'WebinarsController as vm'
        })
        .state('topic.workshops', {
          url: '/workshops/:courseId',
               template: require("./courses/workshops.html"),
          controller: 'WorkshopsController as vm'
        })
        .state('topic.quizes', {
          url: '/quizes/:courseId', template: require("./courses/quizes.html"),
          controller: 'QuizesController as vm'
        });
  });

};
