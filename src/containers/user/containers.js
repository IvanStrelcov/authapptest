import template from './user-template.html';
import controller from './controller.js';

export default () => {
  return {
    template,
    controller,
    restrict: 'E',
    replace: true,
    controllerAs: '$userCtrl',
    bindToController: true,
  };
};
