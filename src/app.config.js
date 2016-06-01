export default ($stateProvider, $urlRouterProvider, ezfbProvider) => {
  'ngInject';
  ezfbProvider.setInitParams({
    appId: '553705891475314',
    version: 'v2.6'
  })

  $urlRouterProvider.otherwise('/welcome');

  $stateProvider
    .state('welcome', {
      url: '/welcome',
      template: '<welcome></welcome>'
    })
    .state('user', {
      url: '/user',
      template: '<user></user>'
    })
    .state('signup', {
      url: '/signup',
      template: '<signup></signup>'
    });
}
