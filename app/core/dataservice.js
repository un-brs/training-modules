(function() {
  'use strict';

  angular
    .module('TmApp')
    .factory('dataservice', dataservice);

  dataservice.$inject = [];

  function dataservice() {

    return {
      'topics': topics,
      'courses': courses,
      'related': related
    };

    function topics() {
      return [{
        'title': 'Overview',
        'id': 1
      }, {
        'title': 'Reporting and other notifications',
        'id': 2
      }, {
        'title': 'Wastes',
        'id': 3
      }, {
        'title': 'POPs',
        'id': 4
      }, {
        'title': 'Chemicals',
        'id': 5
      }, {
        'title': 'National plans and strategies',
        'id': 6
      }, {
        'title': 'Test JH',
        'id': 7
      }, {
        'title': 'Test 2',
        'id': 8
      }, {
        'title': 'Test 3',
        'id': 9
      }];
    }

    function courses(topicId) {
      var result = [];
      angular.forEach([1, 2, 3, 4, 5],
        function(item) {
          result.push({
            'id': item,
            'title': 'Course ' + item,
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet tempus nisi. Sed ullamcorper mauris eget venenatis tempor.'
          });
        }
      );
      return result;
    }

    function related(courseId) {
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
  }
})();
