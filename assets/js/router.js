
  RESNICK.Router = Backbone.Router.extend({

  	wrapper		: null,
  	indexView	: null,
  	aboutView : null, 

    routes: {
      ''      : 'index',
      'about' : 'about'
    },

    initialize() {
    	this.wrapper = new RESNICK.Container();
    },

    index() {
    	this.changeState('index');

    	if (this.indexView === null) {
    		this.indexView = new RESNICK.IndexView();
    	}

    	this.wrapper.child = this.indexView;
    	this.wrapper.render();
    }	  

  }); 
