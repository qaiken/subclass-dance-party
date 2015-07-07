var MakeBlinkyDancer = function(top, left, timeBetweenSteps){
  //this was for funcitonal style
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  //var blinkyDancer = new MakeDancer(top, left, timeBetweenSteps);

  //this is for pseudoclassical style
  MakeDancer.call(this, top, left, timeBetweenSteps);
};

MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

MakeBlinkyDancer.prototype.dancerStep = MakeDancer.prototype.step;

MakeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.dancerStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggleClass('hide');
};
