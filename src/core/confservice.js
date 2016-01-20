module.exports = function(ngModule) {
  'use strict';

  ngModule.factory('confservice', confservice);

  confservice.$inject = ['odataservice'];
  var odataserviceObj;

  function confservice(odataservice) {
    odataserviceObj = odataservice.create();
    odataserviceObj.setBaseUrl(
        'http://informea.pops.int/Meetings/Conferences.svc');
    return {
      service: odataserviceObj,
      webinars: webinars,
    };
  }
  // http://informea.pops.int/Meetings/Conferences.svc/MeetingsGroupeds?$top=20&orderby=Date%20desc&$filter=url%20ne%20null%20and%20substringof(%27E-waste%27,%20brs_terms)%20eq%20true&$select=title,start,url&$format=json
  function webinars(programs) {
    var programs_filter = "";
    programs.forEach(function(program) {
      programs_filter +=
          " and substringof('" + program + "',brs_terms) eq true";
    });
    return odataserviceObj.all("MeetingsGroupeds").getList({
      $top: 200,
      $filter: "url ne null " + programs_filter,
      $select: "title,start,url",
      $orderby: "start desc"
    });
  }
};
