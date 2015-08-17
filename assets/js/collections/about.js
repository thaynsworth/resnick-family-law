var About = Backbone.Collection.extend({
	model: About
});

var data = [

{
	name: "Steve Resnick",
	address: "Basking Ridge, NJ"
}

];

var aboutCollection = new About(data);