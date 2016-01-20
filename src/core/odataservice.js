module.exports = function(ngModule) {
  'use strict';

  ngModule.factory('odataservice', odataservice);
  odataservice.$inject = ['Restangular'];
  var thisRestangular;
  // http://informea.pops.int/BrsDocuments/MFiles.svc/Documents?$top=20&$filter=Programs/any(x:
  // x/Value eq
  // 'E-waste')&$select=DocumentId,PublicationDate,UnNumber,Titles/Value&$expand=Titles
  function odataservice(Restangular) {
    return {create: create};
    function create() {
      return Restangular.withConfig(function(RestangularConfigurer) {
        RestangularConfigurer.setJsonp(true);
        RestangularConfigurer.setDefaultRequestParams('jsonp', {
          $format: 'json',
          $callback: 'JSON_CALLBACK',
          $inlinecount: 'allpages'
        });
        RestangularConfigurer.setDefaultHttpFields({cache: true});

        RestangularConfigurer.setResponseExtractor(function(response, operation,
                                                            what, url) {
          var is_odata3 = response.hasOwnProperty("value");
          var is_odata2 = response.hasOwnProperty("d");

          var is_odata = is_odata2 || is_odata3;
          if (operation === "getList" && is_odata) {
            // Use results as the return type, and save the result metadata
            // in _resultmeta
            var newResponse = is_odata3 ? response.value : response.d.results;
            newResponse["_resultmeta"] = {
              "count": is_odata3 ? response['odata.count'] : response.d.__count
            };
            return newResponse;
          }
          return response;
        });
      });
    }
  }
};
