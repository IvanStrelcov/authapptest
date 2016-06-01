export default class WelcomeController {
  constructor(ezfb) {
    'ngInject';
    this.ezfb = ezfb;
  }
  $onInit() {
    if (localStorage.getItem('userInfo')) {
      this.userInfo = localStorage.getItem('userInfo');
      this.userInfo = JSON.parse(this.userInfo);
      this.picture = this.userInfo.picture.data.url;
      this.show = true;
    }
  }
}
