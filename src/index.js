require('angular');
require('angular-ui-router');
require('angular-loading-bar');
require('angular-loading-bar/build/loading-bar.min.css');
require('lodash-compat');
require('restangular');
require('./styles/main.css');
require('./app.module.js');

var app = angular.module('TmApp');
require('./app.routes.js')(app);
require('./core/dataservice.js')(app);
require('./core/odataservice.js')(app);
require('./core/mfilesservice.js')(app);
require('./core/confservice.js')(app);
require('./core/filters.js')(app);
require('./topics/index.controller.js')(app);
require('./topics/topic.controller.js')(app);
require('./topics/topic-info.controller.js')(app);
require('./courses/course.controller.js')(app);
require('./courses/docs.controller.js')(app);
require('./courses/cases.controller.js')(app);
require('./courses/webinars.controller.js')(app);
require('./courses/workshops.controller.js')(app);
require('./courses/quizes.controller.js')(app);

if (ON_TEST) {
  require('angular-mocks/angular-mocks');
  require('./test.js')(app);
}
