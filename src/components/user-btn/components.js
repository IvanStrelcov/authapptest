import template from './user-btn-template.html';
import controller from './controller.js';

export default () => {
  return {
    template,
    controller,
    restrict: 'E',
    replace: true,
    controllerAs: '$userBtnCtrl',
    bindToController: true,
  };
};
