angular.module('app', ['app.home', 'app.login', 'app.services', 'ui.router'])
  .run(function($rootScope, $state, authFactory) {
    // use authentication service to determine if we have a user logged in for states that require authentication
    $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {
      e && e.preventDefault();
      if (toState.authenticate && !authFactory.user) {
        // User isn’t authenticated, redirect away from restricted content
        $state.transitionTo('login');
      }
    });
  })
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app', {
        url: '/',
        templateUrl: 'app.html',
        authenticate: true
      });
    $urlRouterProvider.otherwise('/login');
  });
