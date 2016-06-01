import ng from 'angular';

import FbLoginComponent from './components';

export default ng.module('app.components.fblogin', [])
  .directive('fbLogin', FbLoginComponent)
  .name;
