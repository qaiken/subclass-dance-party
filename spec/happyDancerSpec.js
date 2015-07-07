describe("happyDancer", function() {

  var happyDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    happyDancer = new MakeHappyDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(happyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node wink", function() {
    sinon.spy(happyDancer.$node, 'toggleClass');
    happyDancer.step();
    expect(happyDancer.$node.toggleClass.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      var timeBetweenSteps = 600;
      sinon.spy(happyDancer, "step");
      expect(happyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(happyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(happyDancer.step.callCount).to.be.equal(2);
    });
  });
});
