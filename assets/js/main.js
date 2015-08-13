
window.App = {
  Models: {},
  Collections: {},
  Views: {},

  start: function(data) {
    var router = new App.Router();

    router.on('route:index', function() {
      $(document.body).append("index route has been called..");
    });

    router.on('route:about', function() {
      $(document.body).append("ABout route has been called..");
    });

    Backbone.history.start();
  }
};
