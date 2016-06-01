export default class FbLoginController {

  constructor($state, ezfb, $window) {
    'ngInject';
    this.$state = $state;
    this.ezfb = ezfb;
    this.$window = $window;
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

  checkStatus(event) {
    event.preventDefault();
    event.stopPropagation();
    this.ezfb.getLoginStatus(response => {
      if (response.status === 'unknown') {
        this.login();
      }
      if (response.status === 'connected') {
        this.connected = true;
        localStorage.setItem('accessToken', JSON.stringify(response.authResponse.accessToken));
        this.getUserInfo(response.authResponse.userID);
      }
      if (response.status === 'not_authorized') {

      }
    });
  }

  login() {
    this.ezfb.login(response => {
      if (response.authResponse) {
        localStorage.setItem('accessToken', JSON.stringify(response.authResponse.accessToken));
        this.getUserInfo(response.authResponse.userID);
      }
    }, {scope: 'public_profile, email, publish_actions',
        auth_type: 'reauthenticate'});
  }

  getUserInfo(id) {
    this.ezfb.api(`/${id}?fields=id,
                                 name,
                                 first_name,
                                 last_name,
                                 picture,
                                 locale,
                                 link,
                                 gender`).then(response => {
       if (response && !response.error) {
         localStorage.setItem('userInfo', JSON.stringify(response));
         this.$state.go('^.user');
       }
     });
  }
}
