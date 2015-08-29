RESNICK.ContactView = Backbone.View.extend({

  el: '.contact',

  viewContainer: _.template($('#contact-container-template').html()),

  initialize() {
    this.render();
  },

  render() {
    let selector = this.$el,
        template = this.viewContainer;

    this.setView(selector, template);

    return this;
  },

});