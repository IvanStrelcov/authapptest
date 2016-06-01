export default class UserController {
  constructor ($state) {
    'ngInject';
    this.$state = $state;
  }

  $onInit() {
    if(localStorage.getItem('userInfo') === null) {
      this.$state.go('^.welcome');
    } else {
      this.userInfo = localStorage.getItem('userInfo');
      this.userInfo = JSON.parse(this.userInfo);
      this.name = this.userInfo.name;
      this.firstName = this.userInfo.first_name;
      this.lastName = this.userInfo.last_name;
      this.picture = this.userInfo.picture.data.url;
      this.gender = this.userInfo.gender;
      this.link = this.userInfo.link;
    }
  }
}
