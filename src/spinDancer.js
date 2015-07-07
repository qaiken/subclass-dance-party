var MakeSpinDancer = function(top, left){
  this.$node = $("<i class='icon-spin3 spin'></i>");
  MakeDancer.call(this, top, left);
};

MakeSpinDancer.prototype = Object.create(MakeDancer.prototype);
MakeSpinDancer.prototype.constructor = MakeSpinDancer;
