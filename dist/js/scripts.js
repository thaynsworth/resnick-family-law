"use strict";

var RESNICK = {

  init: function init() {
    var router = new RESNICK.Router();
    RESNICK.listeners();
    Backbone.history.start();
  },

  listeners: function listeners() {
    // RESNICK.mobileNav();
    // RESNICK.sliderFire($);
    // RESNICK.sliderClicker();
  },

  mobileNav: function mobileNav() {
    $(document).on('click', "#nav-trigger span", function () {
      console.log("neither");
      if ($("#nav-mobile ul").hasClass("expanded")) {
        console.log("first if?");
        $("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
        $(this).removeClass("open");
      } else {
        console.log("second if?");
        $("#nav-mobile").html($("#nav-main").html());
        $("nav#nav-mobile ul").addClass("expanded").slideDown(250);
        $(this).addClass("open");
      }
    });

    $(document).on('click', "#nav-mobile li", function () {
      console.log("or this?");
      $("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
      $(this).removeClass("open");
    });
  },

  sliderClicker: function sliderClicker() {
    $(document).on('click', "#nav-main li", function () {
      console.log('ATTRremoving slider container');
      $("#slider1_container").removeAttr('id');
      console.log("adding NEW slider container");
      $(".slider1_container").attr('id', 'slider2_container');

      console.log('sliderClicker about to go');
      this.sliderFire($);
      console.log('sliderClicker DONE');
    });
  },

  setView: function setView(selector, template) {
    var $selector = this.tojquery(selector);

    $selector.html(template());

    return this;
  },

  createElement: function createElement(string) {
    $("#main-container").empty();

    var $selector = $(document.getElementsByClassName(string)),
        element = document.createElement('div');

    $selector.remove();
    element.className = string;
    element.dataset.view = string;

    $(element).insertAfter(new RESNICK.Container().$el);
    // while (selector.firstChild) {
    //     selector.removeChild(selector.firstChild);
    // }
  },

  tojquery: function tojquery(element) {
    switch (typeof element) {
      case "object":
        if (element instanceof jQuery) {
          return element;
        }
        break;

      case "string":
        if (element.charAt(0) === '.') {
          return $(element);
        } else {
          return $(document.getElementsByClassName(element));
        }
    }
  },

  navActive: function navActive(string) {
    $('.nav-item').removeClass('nav-active');
    $('.nav-' + string).addClass('nav-active');
  },

  changeState: function changeState(string) {
    this.navActive(string);
    this.createElement(string);
    // this.sliderFire($);
    window.scrollTo(0, 0);
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
RESNICK.AboutView = Backbone.View.extend({

  el: '.about',

  viewContainer: _.template($('#about-container-template').html()),

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
RESNICK.LawView = Backbone.View.extend({

  el: '.law',

  viewContainer: _.template($('#law-container-template').html()),

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
RESNICK.ContactView = Backbone.View.extend({

  el: '.contact',

  viewContainer: _.template($('#contact-container-template').html()),

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
RESNICK.TestimonialsView = Backbone.View.extend({

  el: '.testimonials',

  viewContainer: _.template($('#testimonials-container-template').html()),

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
RESNICK.NewsView = Backbone.View.extend({

  el: '.news',

  viewContainer: _.template($('#news-container-template').html()),

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
RESNICK.SeminarView = Backbone.View.extend({

  el: '.seminar',

  viewContainer: _.template($('#seminar-container-template').html()),

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
RESNICK.ResourcesView = Backbone.View.extend({

  el: '.resources',

  viewContainer: _.template($('#resources-container-template').html()),

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
  lawView: null,
  testimonialsView: null,
  newsView: null,
  seminarView: null,
  resourcesView: null,
  contactView: null,

  routes: {
    '': 'index',
    'about': 'about',
    'law': 'law',
    'testimonials': 'testimonials',
    'news': 'news',
    'seminar': 'seminar',
    'resources': 'resources',
    'contact': 'contact'
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
  },

  about: function about() {
    this.changeState('about');

    if (this.aboutView === null) {
      this.aboutView = new RESNICK.AboutView();
    }

    this.wrapper.child = this.aboutView;
    this.wrapper.render();
  },

  law: function law() {
    this.changeState('law');

    if (this.lawView === null) {
      this.lawView = new RESNICK.LawView();
    }

    this.wrapper.child = this.lawView;
    this.wrapper.render();
  },

  testimonials: function testimonials() {
    this.changeState('testimonials');

    if (this.testimonialsView === null) {
      this.testimonialsView = new RESNICK.TestimonialsView();
    }

    this.wrapper.child = this.testimonialsView;
    this.wrapper.render();
  },

  news: function news() {
    this.changeState('news');

    if (this.newsView === null) {
      this.newsView = new RESNICK.NewsView();
    }

    this.wrapper.child = this.newsView;
    this.wrapper.render();
  },

  seminar: function seminar() {
    this.changeState('seminar');

    if (this.seminarView === null) {
      this.seminarView = new RESNICK.SeminarView();
    }

    this.wrapper.child = this.seminarView;
    this.wrapper.render();
  },

  resources: function resources() {
    this.changeState('resources');

    if (this.resourcesView === null) {
      this.resourcesView = new RESNICK.ResourcesView();
    }

    this.wrapper.child = this.resourcesView;
    this.wrapper.render();
  },

  contact: function contact() {
    this.changeState('contact');

    if (this.contactView === null) {
      this.contactView = new RESNICK.ContactView();
    }

    this.wrapper.child = this.contactView;
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