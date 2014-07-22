angular.module('microhoods.login', [])
.controller('login-controller', function($scope, $state, fbAuth){
  $scope.authenticate = function(){
    if(fbAuth.user){
      $state.transitionTo('home');
    }else{
      fbAuth.auth.login('google');
    }
  }

  $scope.logout = function(){
    if(fbAuth.user){
      fbAuth.auth.logout();
      window.location.reload();
    }
  }
});
