var MakeHappyDancer = function(top, left, timeBetweenSteps){
  this.SmileClass = "icon-emo-happy";
  this.WinkClass = "icon-emo-wink";
  timeBetweenSteps = timeBetweenSteps + 500;

  this.$node = $("<i class='" + this.SmileClass + "'></i>");

  MakeDancer.call(this, top, left, timeBetweenSteps);
};

MakeHappyDancer.prototype = Object.create(MakeDancer.prototype);
MakeHappyDancer.prototype.constructor = MakeHappyDancer;

MakeHappyDancer.prototype.dancerStep = MakeDancer.prototype.step;

MakeHappyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.dancerStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggleClass(this.SmileClass + ' ' + this.WinkClass);
};
