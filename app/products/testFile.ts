import { enableProdMode } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';

import { AppComponent } from '../app.component';

// enableProdMode();

bootstrap(AppComponent)
    .then(success => console.log(`Bootstrap success`))
    .catch(error => console.log(error));
