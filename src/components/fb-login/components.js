import template from './fb-login-template.html';
import controller from './controller.js';

export default () => {
  return {
    template,
    controller,
    restrict: 'E',
    replace: true,
    controllerAs: '$fbLoginCtrl',
    bindToController: true,
  };
};
