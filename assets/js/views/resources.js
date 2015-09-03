RESNICK.ResourcesView = Backbone.View.extend({

  el: '.resources',

  viewContainer: _.template($('#resources-container-template').html()),

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