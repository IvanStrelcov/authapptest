import ng from 'angular';

import FbLogoutComponent from './components';

export default ng.module('app.components.fblogout', [])
  .directive('fbLogout', FbLogoutComponent)
  .name;
