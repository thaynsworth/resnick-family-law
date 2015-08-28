
  RESNICK.Router = Backbone.Router.extend({

  	wrapper		        : null,
  	indexView	        : null,
  	aboutView         : null, 
    lawView           : null,
    testimonialsView  : null,

    routes: {
      ''              : 'index',
      'about'         : 'about',
      'law'           : 'law',
      'testimonials'  : 'testimonials'
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
    }, 

    about() {
      this.changeState('about');

      if (this.aboutView === null) {
        this.aboutView = new RESNICK.AboutView();
      }

      this.wrapper.child = this.aboutView;
      this.wrapper.render();
    },

    law() {
      this.changeState('law');

      if (this.lawView === null) {
        this.lawView = new RESNICK.LawView();
      }

      this.wrapper.child = this.lawView;
      this.wrapper.render();
    },

    testimonials() {
      this.changeState('testimonials');

      if (this.testimonialsView === null) {
        this.testimonialsView = new RESNICK.TestimonialsView();
      }

      this.wrapper.child = this.testimonialsView;
      this.wrapper.render();
    },       	  

  }); 
