import template from './fb-logout-template.html';
import controller from './controller.js';

export default () => {
  return {
    template,
    controller,
    restrict: 'E',
    replace: true,
    controllerAs: '$fbLogoutCtrl',
    bindToController: true,
  };
};
