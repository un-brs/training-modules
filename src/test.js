module.exports = function(ngModule) {
  var mfilesServiceObj;
  beforeEach(window.module(ngModule.name));
  beforeEach(inject(function(_mfilesservice_, _$httpBackend_) {
    mfilesServiceObj = _mfilesservice_;
    $httpBackend = _$httpBackend_;

  }));

  describe('my-test', function() {

    it('should test properly', function() {
      $httpBackend.whenGET(/.*/).passThrough();
      var docs = mfilesServiceObj.docs();
      console.log(docs);
    });
  });
};