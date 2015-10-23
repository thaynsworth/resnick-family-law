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

  // sliderFire($) {
  //   jQuery(document).ready(function ($) {
  //     console.log('slider is about to fire');

  //       var _CaptionTransitions = [];
  //       _CaptionTransitions["L"] = { $Duration: 900, x: 0.6, $Easing: { $Left: $JssorEasing$.$EaseInOutSine }, $Opacity: 2 };
  //       _CaptionTransitions["R"] = { $Duration: 900, x: -0.6, $Easing: { $Left: $JssorEasing$.$EaseInOutSine }, $Opacity: 2 };
  //       _CaptionTransitions["T"] = { $Duration: 900, y: 0.6, $Easing: { $Top: $JssorEasing$.$EaseInOutSine }, $Opacity: 2 };
  //       _CaptionTransitions["B"] = { $Duration: 900, y: -0.6, $Easing: { $Top: $JssorEasing$.$EaseInOutSine }, $Opacity: 2 };
  //       _CaptionTransitions["ZMF|10"] = { $Duration: 900, $Zoom: 11, $Easing: { $Zoom: $JssorEasing$.$EaseOutQuad, $Opacity: $JssorEasing$.$EaseLinear }, $Opacity: 2 };
  //       _CaptionTransitions["RTT|10"] = { $Duration: 900, $Zoom: 11, $Rotate: 1, $Easing: { $Zoom: $JssorEasing$.$EaseOutQuad, $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseInExpo }, $Opacity: 2, $Round: { $Rotate: 0.8} };
  //       _CaptionTransitions["RTT|2"] = { $Duration: 900, $Zoom: 3, $Rotate: 1, $Easing: { $Zoom: $JssorEasing$.$EaseInQuad, $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseInQuad }, $Opacity: 2, $Round: { $Rotate: 0.5} };
  //       _CaptionTransitions["RTTL|BR"] = { $Duration: 900, x: -0.6, y: -0.6, $Zoom: 11, $Rotate: 1, $Easing: { $Left: $JssorEasing$.$EaseInCubic, $Top: $JssorEasing$.$EaseInCubic, $Zoom: $JssorEasing$.$EaseInCubic, $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseInCubic }, $Opacity: 2, $Round: { $Rotate: 0.8} };
  //       _CaptionTransitions["CLIP|LR"] = { $Duration: 900, $Clip: 15, $Easing: { $Clip: $JssorEasing$.$EaseInOutCubic }, $Opacity: 2 };
  //       _CaptionTransitions["MCLIP|L"] = { $Duration: 900, $Clip: 1, $Move: true, $Easing: { $Clip: $JssorEasing$.$EaseInOutCubic} };
  //       _CaptionTransitions["MCLIP|R"] = { $Duration: 900, $Clip: 2, $Move: true, $Easing: { $Clip: $JssorEasing$.$EaseInOutCubic} };

  //       var options = {
  //           $FillMode: 2,                                       //[Optional] The way to fill image in slide, 0 stretch, 1 contain (keep aspect ratio and put all inside slide), 2 cover (keep aspect ratio and cover whole slide), 4 actual size, 5 contain for large image, actual size for small image, default value is 0
  //           $AutoPlay: true,                                    //[Optional] Whether to auto play, to enable slideshow, this option must be set to true, default value is false
  //           $AutoPlayInterval: 10000,                            //[Optional] Interval (in milliseconds) to go for next slide since the previous stopped if the slider is auto playing, default value is 3000
  //           $PauseOnHover: 1,                                   //[Optional] Whether to pause when mouse over if a slider is auto playing, 0 no pause, 1 pause for desktop, 2 pause for touch device, 3 pause for desktop and touch device, 4 freeze for desktop, 8 freeze for touch device, 12 freeze for desktop and touch device, default value is 1

  //           $ArrowKeyNavigation: true,                    //[Optional] Allows keyboard (arrow key) navigation or not, default value is false
  //           $SlideEasing: $JssorEasing$.$EaseOutQuint,          //[Optional] Specifies easing for right to left animation, default value is $JssorEasing$.$EaseOutQuad
  //           $SlideDuration: 800,                               //[Optional] Specifies default duration (swipe) for slide in milliseconds, default value is 500
  //           $MinDragOffsetToSlide: 20,                          //[Optional] Minimum drag offset to trigger slide , default value is 20
  //           //$SlideWidth: 600,                                 //[Optional] Width of every slide in pixels, default value is width of 'slides' container
  //           //$SlideHeight: 300,                                //[Optional] Height of every slide in pixels, default value is height of 'slides' container
  //           $SlideSpacing: 0,                           //[Optional] Space between each slide in pixels, default value is 0
  //           $DisplayPieces: 1,                                  //[Optional] Number of pieces to display (the slideshow would be disabled if the value is set to greater than 1), the default value is 1
  //           $ParkingPosition: 0,                                //[Optional] The offset position to park slide (this options applys only when slideshow disabled), default value is 0.
  //           $UISearchMode: 1,                                   //[Optional] The way (0 parellel, 1 recursive, default value is 1) to search UI components (slides container, loading screen, navigator container, arrow navigator container, thumbnail navigator container etc).
  //           $PlayOrientation: 1,                                //[Optional] Orientation to play slide (for auto play, navigation), 1 horizental, 2 vertical, 5 horizental reverse, 6 vertical reverse, default value is 1
  //           $DragOrientation: 1,                                //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)

  //           $CaptionSliderOptions: {                            //[Optional] Options which specifies how to animate caption
  //               $Class: $JssorCaptionSlider$,                   //[Required] Class to create instance to animate caption
  //               $CaptionTransitions: _CaptionTransitions,       //[Required] An array of caption transitions to play caption, see caption transition section at jssor slideshow transition builder
  //               $PlayInMode: 1,                                 //[Optional] 0 None (no play), 1 Chain (goes after main slide), 3 Chain Flatten (goes after main slide and flatten all caption animations), default value is 1
  //               $PlayOutMode: 3                                 //[Optional] 0 None (no play), 1 Chain (goes before main slide), 3 Chain Flatten (goes before main slide and flatten all caption animations), default value is 1
  //           },

  //           $BulletNavigatorOptions: {                          //[Optional] Options to specify and enable navigator or not
  //               $Class: $JssorBulletNavigator$,                 //[Required] Class to create navigator instance
  //               $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
  //               $AutoCenter: 1,                                 //[Optional] Auto center navigator in parent container, 0 None, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
  //               $Steps: 1,                                      //[Optional] Steps to go for each navigation request, default value is 1
  //               $Lanes: 1,                                      //[Optional] Specify lanes to arrange items, default value is 1
  //               $SpacingX: 8,                                   //[Optional] Horizontal space between each item in pixel, default value is 0
  //               $SpacingY: 8,                                   //[Optional] Vertical space between each item in pixel, default value is 0
  //               $Orientation: 1                                 //[Optional] The orientation of the navigator, 1 horizontal, 2 vertical, default value is 1
  //           },

  //           $ArrowNavigatorOptions: {                           //[Optional] Options to specify and enable arrow navigator or not
  //               $Class: $JssorArrowNavigator$,                  //[Requried] Class to create arrow navigator instance
  //               $ChanceToShow: 1,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
  //               $AutoCenter: 2,                                 //[Optional] Auto center arrows in parent container, 0 No, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
  //               $Steps: 1                                       //[Optional] Steps to go for each navigation request, default value is 1
  //           }
  //       };

  //       var jssor_slider1 = new $JssorSlider$("slider1_container", options);

  //       //responsive code begin
  //       //you can remove responsive code if you don't want the slider scales while window resizes
  //       function ScaleSlider() {
  //           var bodyWidth = document.body.clientWidth;
  //           if (bodyWidth)
  //               jssor_slider1.$ScaleWidth(Math.min(bodyWidth, 1920));
  //           else
  //               window.setTimeout(ScaleSlider, 30);
  //       }
  //       ScaleSlider();

  //       $(window).bind("load", ScaleSlider);
  //       $(window).bind("resize", ScaleSlider);
  //       $(window).bind("orientationchange", ScaleSlider);
  //       //responsive code end  
  //     });
  // }, 

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
    // console.log('about to FIRE');
    // this.sliderFire($);
    // console.log('FIRREED'); 
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