"use strict";

const RESNICK = {

	init() {
		let router = new RESNICK.Router();

		Backbone.history.start();
	},

  setView(selector, template) {
    let $selector = this.tojquery(selector);

    $selector.html(template());

    return this;
  },

	createElement(string) {
    let $selector = $(document.getElementsByClassName(string)),
        element = document.createElement('div');

    element.className = string;
    element.dataset.view = string;
    $selector.remove();
    $(element).insertAfter(new RESNICK.Container().$el);
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

}

_.extend(Backbone.View.prototype, RESNICK);
_.extend(Backbone.Router.prototype, RESNICK);