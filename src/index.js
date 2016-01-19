require('angular');
require('angular-ui-router');
require('lodash-compat');
require('restangular');
require('./styles/main.css');
require('./app.module.js');
require('./app.routes.js');
require('./core/dataservice.js');
require('./topics/index.controller.js');
require('./topics/topic.controller.js');
require('./topics/topic-info.controller.js');
require('./courses/course.controller.js');
require('./courses/docs.controller.js');
require('./courses/cases.controller.js');
require('./courses/webinars.controller.js');
require('./courses/workshops.controller.js');
require('./courses/quizes.controller.js');

if (ON_TEST) {
  require('angular-mocks/angular-mocks');
  require('./test.js')(angular.module('TmApp'));
}