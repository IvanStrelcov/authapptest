import ng from 'angular';

import WelcomeContainer from './containers';

export default ng.module('app.containers.welcome', [])
  .directive('welcome', WelcomeContainer)
  .name;
