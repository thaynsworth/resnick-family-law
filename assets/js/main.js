
window.App = {
  Models: {},
  Collections: {},
  Views: {},

  start: function(data) {
    var router = new App.Router();

    router.on('route:index', function() {
      $('#sample-info').append("index route has been called..");
    });

    router.on('route:about', function() {
      var aboutView = new About({
        collection: about
      });
      // $('#about-info').append(this.aboutView(model.toJSON()));
    });

    Backbone.history.start();
  }
};
