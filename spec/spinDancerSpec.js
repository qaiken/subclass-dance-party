describe("spinDancer", function() {

  var spinDancer;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    spinDancer = new MakeSpinDancer(10, 20);
  });

  it("should have a jQuery $node object", function(){
    expect(spinDancer.$node).to.be.an.instanceof(jQuery);
  });

});
