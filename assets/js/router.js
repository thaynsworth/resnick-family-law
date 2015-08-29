
  RESNICK.Router = Backbone.Router.extend({

  	wrapper		        : null,
  	indexView	        : null,
  	aboutView         : null, 
    lawView           : null,
    testimonialsView  : null,
    contactView       : null,

    routes: {
      ''              : 'index',
      'about'         : 'about',
      'law'           : 'law',
      'testimonials'  : 'testimonials',
      'contact'       : 'contact'   
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

    contact() {
      this.changeState('contact');

      if (this.contactView === null) {
        this.contactView = new RESNICK.ContactView();
      }

      this.wrapper.child = this.contactView;
      this.wrapper.render();
    },           	  

  }); 
