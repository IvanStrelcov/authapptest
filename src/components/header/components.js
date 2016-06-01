import template from './header-template.html';
import controller from './controller.js';

export default () => {
  return {
    template,
    controller,
    restrict: 'E',
    replace: true,
    controllerAs: '$headerCtrl',
    bindToController: true,
  };
};
