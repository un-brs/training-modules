module.exports = function(ngModule) {
  describe('my-test', function() {
    beforeEach(window.module(ngModule.name));
    it('should test properly', function() { expect(false).to.be.false; });
  });
};