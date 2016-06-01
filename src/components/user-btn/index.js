import ng from 'angular';

import UserBtnComponent from './components';

export default ng.module('app.components.userbtn', [])
  .directive('userBtn', UserBtnComponent)
  .name;
