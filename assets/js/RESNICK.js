"use strict";

const RESNICK = {

	init() {
		let router = new RESNICK.Router();
    // RESNICK.listeners();
		Backbone.history.start();
	},

  // listeners() {
  //   RESNICK.mobileNav();
  //   RESNICK.sliderFire($);
  // },

  // mobileNav() {
  //   $(document).on('click', "#nav-trigger span", function(){
  //       if ($("nav#nav-mobile ul").hasClass("expanded")) {
  //           $("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
  //           $(this).removeClass("open");
  //       } else {
  //           $("nav#nav-mobile ul").addClass("expanded").slideDown(250);
  //           $(this).addClass("open");
  //       }
  //   });
  // },

  // sliderFire($) {
  //   console.log('Jssssoororrro');
  //     let options = { $AutoPlay: true };
  //     let jssor_slider1 = new $JssorSlider$('slider1_container', options);
  // },  

  setView(selector, template) {
    let $selector = this.tojquery(selector);

    $selector.html(template());

    return this;
  },

	createElement(string) {
    $("#main-container").empty();
    let $selector = $(document.getElementsByClassName(string)),
        element = document.createElement('div');

    $selector.remove();    
    element.className = string;
    element.dataset.view = string;

    $(element).insertAfter(new RESNICK.Container().$el);
    // while (selector.firstChild) {
    //     selector.removeChild(selector.firstChild);
    // }
  
  },

  tojquery(element) {
    switch (typeof element) {
      case "object":
        if (element instanceof jQuery) {
          return element;
        }
        break;

      case "string":
        if (element.charAt(0) === '.') {
          return $(element);
        }
        else {
          return $(document.getElementsByClassName(element));
        }
    }
  },

  navActive(string) {
    $('.nav-item').removeClass('nav-active');
    $('.nav-' + string).addClass('nav-active');
  },

  changeState(string) {
    this.navActive(string);
    this.createElement(string);
  }, 

};

_.extend(Backbone.View.prototype, RESNICK);
_.extend(Backbone.Router.prototype, RESNICK);