import ng from 'angular';

import HeaderUserComponent from './components';

export default ng.module('app.components.userheader', [])
  .directive('userHeader', HeaderUserComponent)
  .name;
