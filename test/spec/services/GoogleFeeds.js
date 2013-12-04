'use strict';

describe('Service: GoogleFeeds', function () {

  // load the service's module
  beforeEach(module('MeraMinisterApp'));

  // instantiate service
  var GoogleFeeds;
  beforeEach(inject(function (_GoogleFeeds_) {
    GoogleFeeds = _GoogleFeeds_;
  }));

  it('should do something', function () {
    expect(!!GoogleFeeds).toBe(true);
  });

});
