import { Injectable } from '@angular/core';

@Injectable()
export class LazyService {

  constructor() {
    // For verifying when the service is constructed
    console.log('Lazy service initialised');
  }

}
