import template from './welcome-template.html';
import controller from './controller.js';

export default () => {
  return {
    template,
    controller,
    restrict: 'E',
    replace: true,
    controllerAs: '$welcomeCtrl',
    bindToController: true,
  };
};
