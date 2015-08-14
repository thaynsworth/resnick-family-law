var About = Backbone.View.extend({
	el: '#about',
	aboutTemplate: _.template($('#about-template').html()),
	initialize: function() {
		this.addAll();
	},
	addOne: function(model) {
		$('#about-info').append(this.aboutTemplate(model.toJSON()));
		return this;
	}, 
	addAll: function() {
		var self = this;
		this.collection.each(function(model) {
			self.addOne(model);
		});
	},

});