export default class HeaderUserController {
  constructor($window) {
    'ngInject';
  }

  $onInit() {
    if (localStorage.getItem('userInfo')) {
      this.userInfo = localStorage.getItem('userInfo');
      this.userInfo = JSON.parse(this.userInfo);
      this.url = this.userInfo.picture.data.url;
      this.name = this.userInfo.name;
      this.link = this.userInfo.link;
    }
  }
}
