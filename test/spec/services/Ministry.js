'use strict';

describe('Service: Ministry', function () {

  // load the service's module
  beforeEach(module('MeraMinisterApp'));

  // instantiate service
  var Ministry;
  beforeEach(inject(function (_Ministry_) {
    Ministry = _Ministry_;
  }));

  it('should do something', function () {
    expect(!!Ministry).toBe(true);
  });

});
