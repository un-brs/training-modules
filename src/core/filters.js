module.exports = function(ngModule) {
  'use strict';
  var mimeToIcon = {
    "application/pdf": 'fa-file-pdf-o',
    "application/msword": 'fa-file-word-o',
    "application/vnd.ms-excel": 'fa-file-excel-o',
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        'fa-file-word-o',
    "default": 'fa-external-link'
  };

  var digits = /\d+/;

  ngModule.filter('icon_by_mime', function() {
    return function(mime) {
      return mime in mimeToIcon ? mimeToIcon[mime] : mimeToIcon['default'];
    };
  });

  ngModule.filter('odata_date', function() {
    return function(date) { return date.match(digits)[0]; };
  });
};