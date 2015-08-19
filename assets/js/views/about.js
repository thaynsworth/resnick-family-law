RESNICK.AboutView = Backbone.View.extend({

  el: '.about',

  viewContainer: _.template($('#about-container-template').html()),

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