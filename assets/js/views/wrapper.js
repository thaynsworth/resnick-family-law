RESNICK.Container = Backbone.View.extend({

	el: '#main-container',
	child: null,

	render() {
		this.$el.html(this.child.$el);

		return this;
	},

});