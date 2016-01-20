module.exports = function(ngModule) {
  'use strict';

  ngModule.factory('dataservice', dataservice);

  dataservice.$inject = ['Restangular'];

  function dataservice(Restangular) {
    Restangular.setBaseUrl(
        'http://informea.pops.int/e-learning/ElearningService.svc');
    Restangular.setDefaultRequestParams(
        'get', {$format: 'json', callback: 'JSON_CALLBACK'});

    Restangular.setDefaultHttpFields({cache: true});

    return {
      'topics': topics,
      'courses': courses,
      'related': related,
      'docs': docs,
      'webinars': webinars,
      'workshops': workshops
    };

    function topics() {
      console.log(Restangular.all('el_topic').getList());
      return [
        {'title': 'Overview', 'id': 1},
        {'title': 'Reporting and other notifications', 'id': 2},
        {'title': 'Wastes', 'id': 3},
        {'title': 'POPs', 'id': 4},
        {'title': 'Chemicals', 'id': 5},
        {'title': 'National plans and strategies', 'id': 6},
        {'title': 'Test JH', 'id': 7},
        {'title': 'Test 2', 'id': 8},
        {'title': 'Test 3', 'id': 9}
      ];
    }

    function courses(topicId) {
      var result = [];
      angular.forEach([1, 2, 3, 4, 5], function(item) {
        if (topicId == 3 && item == 1) {
          result.push({
            'id': item,
            'title': 'Course ' + item + ' - E-waste',
            'description':
                'The training module is to be used to train officials in Parties that are involved in activities related to E-wastes.'
          });
        } else {
          result.push({
            'id': item,
            'title': 'Course ' + item,
            'description':
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet tempus nisi. Sed ullamcorper mauris eget venenatis tempor.'
          });
        }
      });
      return result;
    }

    function docs(courseId) {
      var result = [];
      result.push({
        'id': 1,
        'title': 'test title doc',
        'date': '27/11/2015',
        'lnkWord':
            'http://chm.pops.int/portals/4/download.aspx?d=UNEP-POPS-COP.7-SC-7-16.English.docx',
        'lnkPdf':
            'http://chm.pops.int/portals/4/download.aspx?d=UNEP-POPS-COP.7-SC-7-16.English.pdf'
      });
      return result;
    }

    function webinars(courseId) {
      var result = [];
      result.push({
        'id': 1,
        'title': 'Technical Guidelines on Transboundary Movements of E-waste',
        'date': '10/11/2015',
        'lnk':
            'http://www.basel.int/Default.aspx?tabid=4210&meetId=BC23947F-447E-E511-BFED-005056937F29&lang=en'
      });
      return result;
    }

    function workshops(courseId) {
      var result = [];
      result.push({
        'id': 1,
        'title':
            'Regional workshop on enhancing capacities for the environmentally sound management of waste electrical and electronic equipment (e-waste) through the regional delivery in Africa',
        'date': '20/10/2015',
        'lnk': 'http://www.basel.int/Default.aspx?tabid=4619'
      });
      return result;
    }

    function related(courseId) {
      var result = [];
      angular.forEach([1, 2, 3, 4, 5], function(item) {
        result.push(
            {'id': item, 'topicId': item, 'title': 'Related course ' + item});
      });
      return result;
    };
  }
};
