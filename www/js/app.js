// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Framework7', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
    checklogin: function () {

      // if(localStorage.auth){
      //   //app.dialog.alert(localStorage.id);
      //   app.dialog.alert(localStorage.deta);
        
      // }else{ 
      //   var provider = new firebase.auth.GoogleAuthProvider();
        
      //   firebase.auth().signInWithRedirect(provider);
      //   firebase.auth().getRedirectResult().then(function(result) {
      //     if (result.credential) {
      //       // This gives you a Google Access Token.
      //       // You can use it to access the Google API.
      //       var token = result.credential.accessToken;
      //       // The signed-in user info.
      //       var user = result.user;
      //       // ...
      //       var myJSON = JSON.stringify(user);
      //       localStorage.auth= 'yes';
      //       localStorage.deta= myJSON;
      //     }
      //   }).catch(function(error) {
      //     // Handle Errors here.
      //     var errorCode = error.code;
      //     var errorMessage = error.message;

      //      app.dialog.alert(errorMessage);
      //   });
      //    // firebase.auth().signInWithRedirect(provider).then(function() {
      //    //    //return firebase.auth().getRedirectResult();
      //    //  }).then(function(result) {
      //    //    // This gives you a Google Access Token.
      //    //    // You can use it to access the Google API.
      //    //    var token = result.credential.accessToken;
      //    //    // The signed-in user info.
      //    //    var user = result.user;
      //    //    var myJSON = JSON.stringify(user);
      //    //    localStorage.auth= 'yes';
      //    //    localStorage.deta= myJSON;
      //    //    // ...
      //    //  }).catch(function(error) {
      //    //    // Handle Errors here.
      //    //    var errorCode = error.code;
      //    //    var errorMessage = error.message;
      //    //  });

      // }
    },
  },
  // App routes
  routes: routes,
});

// Init/Create main view
var mainView = app.views.create('.view-main', {
  url: '/'
});

// Login Screen Demo
$$('#my-login-screen .login-button').on('click', function () {
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  // Close login screen
  app.loginScreen.close('#my-login-screen');


      if(localStorage.auth){
        app.dialog.alert(localStorage.auth);
        app.dialog.alert(localStorage.deta);
        
      }else if(localStorage.erro){
        app.dialog.alert(localStorage.erro);
      }else{ 
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithRedirect(provider).then(function() {
          return firebase.auth().getRedirectResult();
        }).then(function(result) {
          // This gives you a Google Access Token.
          // You can use it to access the Google API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          var myJSON = JSON.stringify(user);
            localStorage.auth= 'yes';
            localStorage.deta= myJSON;
          // ...
        }).catch(function(error) {
          // Handle Errors here. 
          var errorCode = error.code;
          var errorMessage = error.message;
          //var err = JSON.stringify(errorMessage);
          localStorage.erro= errorMessage;

        });
         

      }
  // Alert username and password
  //app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
});
