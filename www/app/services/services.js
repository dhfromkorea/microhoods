angular.module('app.services',[])
.factory('fbAuth', function($state){
  // create an authorization service, where we can store/access user data on login
  var ref = new Firebase('https://mcrhds.firebaseio.com');
  var service = {};
  service.user = undefined;
  service.auth = new FirebaseSimpleLogin(ref, function(error, user) {
    if (error) {
      // an error occurred while attempting login
      console.log(error);
    } else if (user) {
      // user authenticated with Firebase
      service.user = user;
      var payload = JSON.stringify({ googleId: user.id, googleDisplayName: user.displayName });

      var request = new XMLHttpRequest();
      request.open('POST', '/', true);
      request.send(payload);
      $state.transitionTo('home');
    } else {
      // user is logged out
    }
  });
  return service;
});