"use strict";

var RESNICK = {

  init: function init() {
    var router = new RESNICK.router();

    Backbone.history.start();
  },

  createElement: function createElement(string) {
    var $selector = $(document.getElementsByClassName(string)),
        element = document.createElement('div');

    element.className = string;
    element.dataset.view = string;
    $selector.remove();
    $(element).insertAfter(new RESNICK.Container().$el);
  },

  navActive: function navActive(string) {
    $('.nav-item').removeClass('nav-active');
    $('.nav-' + string).addClass('nav-active');
  },

  changeState: function changeState(string) {
    this.navActive(string);
    this.createElement(string);
  }

};

_.extend(Backbone.View.prototype, RESNICK);
_.extend(Backbone.Router.prototype, RESNICK);
RESNICK.Container = Backbone.View.extend({

  el: '#main-container',
  child: null,

  render: function render() {
    this.$el.html(this.child.$el);

    return this;
  }

});
RESNICK.IndexView = Backbone.View.extend({

  el: '.index',

  viewContainer: _.template($('#index-container-template').html()),

  initialize: function initialize() {
    this.render();
  },

  render: function render() {
    var selector = this.$el,
        template = this.viewContainer;

    this.setView(selector, template);

    return this;
  }

});

RESNICK.Router = Backbone.Router.extend({

  wrapper: null,
  indexView: null,
  aboutView: null,

  routes: {
    '': 'index',
    'about': 'about'
  },

  initialize: function initialize() {
    this.wrapper = new RESNICK.Container();
  },

  index: function index() {
    this.changeState('index');

    if (this.indexView === null) {
      this.indexView = new RESNICK.IndexView();
    }

    this.wrapper.child = this.indexView;
    this.wrapper.render();
  }

});

RESNICK.init();

// window.App = {
//   Models: {},
//   Collections: {},
//   Views: {},

//   start: function(data) {
//     var router = new App.Router();

//     router.on('route:index', function() {
//       $('#sample-info').append("index route has been called..");
//     });

//     router.on('route:about', function() {
//       var aboutView = new About({
//         collection: aboutCollection
//       });

//     });

//     Backbone.history.start();
//   }
// };

function didItWork() {
  console.log("yoooooo");
};

didItWork();