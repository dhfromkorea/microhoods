angular.module('app.login', [])
  .config(function($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'login.html'
      });
  })
  .controller('login-controller', function($scope, $state, authFactory) {
    $scope.authenticate = function() {
      if (authFactory.user) {
        $state.go('home');
      } else {
        authFactory.auth.login('google');
      }
    };
    $scope.logout = function() {
      if (authFactory.user) {
        authFactory.auth.logout();
        window.location.reload();
      }
    };
  });
