// Creates and returns a new dancer object that can step
var MakeDancer = function(top, left, timeBetweenSteps){

  if(!window.dancers) {
    window.dancers = [];
  }

  // use jQuery to create an HTML <span> tag
  this.$node = this.$node || $('<span class="dancer"></span>');
  this.$node.addClass('sfx');
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.count = window.dancers.length;
  this.pair = null;

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
  this.step();
};

MakeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

MakeDancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

MakeDancer.prototype.lineUp = function() {
  var oldPosition = {
    top: this.top,
    left: this.left
  };

  this.setPosition('50%', (this.count * this.$node.outerWidth()) + 'px');

  setTimeout(this.setPosition.bind(this,oldPosition.top,oldPosition.left),6000);

};
