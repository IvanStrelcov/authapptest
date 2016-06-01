import ng from 'angular';

import UserContainer from './containers';

export default ng.module('app.containers.user', [])
  .directive('user', UserContainer)
  .name;
