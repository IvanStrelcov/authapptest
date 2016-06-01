import ng from 'angular';

import SignupContainer from './containers';

export default ng.module('app.containers.signup', [])
  .directive('signup', SignupContainer)
  .name;
