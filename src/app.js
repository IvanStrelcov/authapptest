import ng from 'angular';

import 'angular-ui-router';
import 'bootstrap/less/bootstrap.less';
import 'lodash';
import 'angular-ui-bootstrap';
import 'font-awesome/less/font-awesome.less';
import 'angular-easyfb';

import Components from './components';
import Containers from './containers';

import AppConfig from './app.config.js';

ng.module('app', [Components, Containers, 'ui.bootstrap', 'ui.router', 'ezfb'])
  .config(AppConfig);
  
