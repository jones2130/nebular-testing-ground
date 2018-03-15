import { Injectable } from '@angular/core';

import { NbDummyAuthProvider, NbAuthResult } from '@nebular/auth';

@Injectable()
export class TestAuthProvider extends NbDummyAuthProvider {
  protected createDummyResult(data?: any): NbAuthResult {
    if (this.getConfigValue('alwaysFail')) {
      // TODO we dont call tokenService clear during logout in case result is not success
      return new NbAuthResult(false,
        this.createFailResponse(data),
        null,
        ['Something went wrong.']);
    }

    // TODO is it missed messages here, is it token should be defined
    return new NbAuthResult(true, this.createSuccessResponse(data), '/', ['Successfully logged in.']);
  }
}
