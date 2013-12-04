'use strict';

describe('Service: JSONP', function () {

  // load the service's module
  beforeEach(module('MeraMinisterApp'));

  // instantiate service
  var JSONP;
  beforeEach(inject(function (_JSONP_) {
    JSONP = _JSONP_;
  }));

  it('should do something', function () {
    expect(!!JSONP).toBe(true);
  });

});
