angular.module('app.services', [])
  .factory('authFactory', function($state) {
    // create an authorization service, where we can store/access user data on login
    var ref = new Firebase('https://mcrhds.firebaseio.com');
    var user = undefined;
    var auth = new FirebaseSimpleLogin(ref, function(error, user) {
      if (error) {
        // an error occurred while attempting login
        console.log(error);
      } else if (user) {
        // user authenticated with Firebase
        service.user = user;
        var payload = JSON.stringify({
          googleId: user.id,
          googleDisplayName: user.displayName
        });

        var request = new XMLHttpRequest();
        request.open('POST', '/', true);
        request.send(payload);
        $state.transitionTo('home');
      } else {
        // user is logged out
      }
    });
    return {
      user: user,
      auth: auth
    };
  })
  .factory('mapFactory', function() {


    return {


    };
  });
