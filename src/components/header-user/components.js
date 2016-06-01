import template from './header-user-template.html';
import controller from './controller.js';
import './header-user.less';

export default () => {
  return {
    template,
    controller,
    restrict: 'E',
    replace: true,
    controllerAs: '$headerUserCtrl',
    bindToController: true,
  };
};
