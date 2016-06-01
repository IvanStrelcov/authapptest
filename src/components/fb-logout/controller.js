export default class FbLogoutController {

  constructor($window, ezfb, $state) {
    'ngInject';
    this.ezfb = ezfb;
    this.$state = $state;
  }

  $onInit() {
    this.ezfb.getLoginStatus(response => {
      if (response.status === 'connected') {
        this.connected = false;
      } else {
        this.connected = true;
      }
    });
  }

  logout(event) {
    event.preventDefault();
    event.stopPropagation();
    this.ezfb.getLoginStatus(response => {
        if (response && response.status === 'connected') {
          this.ezfb.logout(response => {
            localStorage.clear();
            this.connected = false;
            if(this.$state.current.name === 'user') {
              this.$state.go('welcome');
            } else {
              this.$state.reload();
            }
          });
        } else {
          localStorage.clear();
          this.connected = false;
          if(this.$state.current.name === 'user') {
            this.$state.go('welcome');
          } else {
            this.$state.reload();
          }
        }
    });
  }
}
