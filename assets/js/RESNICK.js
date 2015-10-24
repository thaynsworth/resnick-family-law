"use strict";

const RESNICK = {

	init() {
		let router = new RESNICK.Router();
    RESNICK.listeners();
		Backbone.history.start();
	},

  listeners() {
    // RESNICK.mobileNav();
    // RESNICK.sliderFire($);
    // RESNICK.sliderClicker();
  },

  mobileNav() {
    $(document).on('click', "#nav-trigger span", function(){   
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

    $(document).on('click', "#nav-mobile li", function(){
      console.log("or this?");
      $("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
      $(this).removeClass("open");      
    });    

  },  


  sliderClicker() {
    $(document).on('click', "#nav-main li", function(){
      console.log('ATTRremoving slider container');
      $("#slider1_container").removeAttr('id');
      console.log("adding NEW slider container");
      $(".slider1_container").attr('id', 'slider2_container');

      console.log('sliderClicker about to go');
      this.sliderFire($);      
      console.log('sliderClicker DONE');
    });   
  },

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
    // this.sliderFire($);
    window.scrollTo(0, 0);
  }, 

};

_.extend(Backbone.View.prototype, RESNICK);
_.extend(Backbone.Router.prototype, RESNICK);