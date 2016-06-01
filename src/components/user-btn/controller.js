export default class FbLoginController {

  constructor($state, ezfb) {
    'ngInject';
    this.$state = $state;
    this.ezfb = ezfb;
  }

  $onInit() {
    this.connected = true;
    this.ezfb.getLoginStatus(response => {
      if (response.status === 'connected') {
        this.connected = true;
      } else {
        this.connected = false;
      }
    });
  }

  goToUserPage(event) {
    event.preventDefault();
    event.stopPropagation();
    this.$state.go('^.user');
  }
}
