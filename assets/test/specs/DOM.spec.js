define(['jquery', 'jasmine-jquery'], function($) {
  describe('DOM', function() {
    beforeEach(function() {
      $('body').append('<div id="js-injected">An injected DOM node</div>');
    });

    afterEach(function() {
      $('#js-injected').remove();
    });

    it('should insert some fixture data into the SpecRunner', function() {
      expect(document.getElementById('js-injected').innerHTML).toBe('An injected DOM node');
    });
  });

  describe('More DOM', function() {
    it('should remove our fixture data after tearDown', function() {
      expect(document.getElementById('js-injected')).toBeNull();
    });
  });

  describe('Loading fixtures', function() {
    beforeEach(function() {
      jasmine.getFixtures().fixturesPath = "base/test/specs/fixtures/";
    });

    describe('Loading a test fixture', function() {
      it('should load a test fixture', function() {
        jasmine.getFixtures().load('text-fixture.html');
        expect($('#my-fixture')).toBeVisible();
      });
    });
  });
});
