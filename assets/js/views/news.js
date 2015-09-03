RESNICK.NewsView = Backbone.View.extend({

  el: '.news',

  viewContainer: _.template($('#news-container-template').html()),

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