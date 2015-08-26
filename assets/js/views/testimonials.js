RESNICK.TestimonialsView = Backbone.View.extend({

  el: '.law',

  viewContainer: _.template($('#testimonials-container-template').html()),

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