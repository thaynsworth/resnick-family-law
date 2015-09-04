
  RESNICK.Router = Backbone.Router.extend({

  	wrapper		        : null,
  	indexView	        : null,
  	aboutView         : null, 
    lawView           : null,
    testimonialsView  : null,
    newsView          : null,
    seminarView       : null,
    resourcesView     : null,
    contactView       : null,

    routes: {
      ''              : 'index',
      'about'         : 'about',
      'law'           : 'law',
      'testimonials'  : 'testimonials',
      'news'          : 'news',
      'seminar'       : 'seminar',
      'resources'     : 'resources',
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
      console.log('about to FIRE');
      this.sliderFire($);
      console.log('FIRREED');
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

    news() {
      this.changeState('news');

      if (this.newsView === null) {
        this.newsView = new RESNICK.NewsView();
      }

      this.wrapper.child = this.newsView;
      this.wrapper.render();
    }, 

    seminar() {
      this.changeState('seminar');

      if (this.seminarView === null) {
        this.seminarView = new RESNICK.SeminarView();
      }

      this.wrapper.child = this.seminarView;
      this.wrapper.render();
    }, 

    resources() {
      this.changeState('resources');

      if (this.resourcesView === null) {
        this.resourcesView = new RESNICK.ResourcesView();
      }

      this.wrapper.child = this.resourcesView;
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
