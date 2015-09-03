RESNICK.SeminarView = Backbone.View.extend({

  el: '.seminar',

  viewContainer: _.template($('#seminar-container-template').html()),

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