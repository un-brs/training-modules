module.exports = function(ngModule) {
  'use strict';

  ngModule.factory('mfilesservice', mfilesservice);

  mfilesservice.$inject = ['odataservice'];
  var odataserviceObj;

  function mfilesservice(odataservice) {
    odataserviceObj = odataservice.create();
    odataserviceObj.setBaseUrl(
        'http://informea.pops.int/BrsDocuments/MFiles.svc');
    return {
      service: odataserviceObj,
      documents: documents,
    };
  }

  function documents(programs, language) {
    var programs_filter = "";
    var delim = "";
    programs.forEach(function(program) {
      programs_filter += delim + " (x/Value eq '" + program + "')";
      delim = " or ";
    });
    return odataserviceObj.all("Documents").getList({
      $top: 200,
      $filter: "Programs/any(x:" + programs_filter + ")" +
                   " and Titles/any(l:l/Language eq '" + language + "')",
      $select: "DocumentId,PublicationDate,UnNumber,Files,Titles",
      $expand: "Titles,Files",
      $orderby: "PublicationDate desc"
    });
  }
};
