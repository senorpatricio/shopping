
///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
import { bootstrap } from 'angular2/platform/browser';
import {Component, provide} from 'angular2/core';
//import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {LocationStrategy, HashLocationStrategy} from 'angular2/platform/common';
import {MenuComponent} from './shared/menu.component';
import {LinkBuildService} from './shared/linkBuild.service';

// Our main component
import { AppComponent } from './app.component';

bootstrap(AppComponent, [LinkBuildService]);