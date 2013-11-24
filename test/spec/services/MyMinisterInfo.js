'use strict';

describe('Service: MyMinisterInfo', function () {

  // load the service's module
  beforeEach(module('MeraMinisterApp'));

  // instantiate service
  var MyMinisterInfo;
  beforeEach(inject(function (_MyMinisterInfo_) {
    MyMinisterInfo = _MyMinisterInfo_;
  }));

  it('should do something', function () {
    expect(!!MyMinisterInfo).toBe(true);
  });

});
