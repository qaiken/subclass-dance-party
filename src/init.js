  $(document).ready(function(){
  window.dancers = [];

  var sfx = new Audio('sfx.wav');
  sfx.volume = 0.5;

  var pairDancers = function() {
    window.dancers.forEach(function(dancer, i) {

      if (dancer.pair) {
        return;
      }

      var pairData = window.dancers.reduce(function(pairData,pairDancer, j) {
        var d;

        if( i === j || pairDancer.pair ) {
          return pairData;
        }

        d = Math.sqrt(Math.pow(dancer.top - pairDancer.top, 2) +
         Math.pow(dancer.left - pairDancer.left, 2));

        if( d < pairData.d ) {
          pairData.node = pairDancer;
          pairData.d = d;
        }

        return pairData;
      },{
        node: null,
        d: Infinity
      });

      if(pairData.node) {
        dancer.pair = pairData.node;
        dancer.pair.danceClass = 'dance';


        dancer.pair.pair = dancer;
        dancer.danceClass = 'dance-reverse';
      }

    });
  };

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);

    window.dancers.push(dancer);
  });

  $(".lineUpButton").on("click", function(event) {

    setTimeout(function(){
      $('.conga').addClass('flash');
      setTimeout(function() {
        $('.conga').removeClass('flash')
      }, 3000)
    }, 5000);

    window.dancers.forEach(function(dancer) {
      dancer.lineUp();
    });

  });

  $('.pairUpButton').on('click',function(e) {
    pairDancers();

    window.dancers.forEach(function(dancer) {

      if(!dancer.pair) {
        return;
      }

      var oldPosition = {
        top: dancer.top,
        left: dancer.left
      };

      var midPoint = {
        top: ((dancer.top) + (dancer.pair.top)) / 2,
        left: ((dancer.left) + (dancer.pair.left)) / 2
      };


      // CSS transition is set to 5s
      dancer.setPosition(midPoint.top, midPoint.left);
      // CSS animation is set to 5s
      dancer.$node.addClass(dancer.danceClass);

      setTimeout(function() {
        dancer.setPosition(oldPosition.top, oldPosition.left);
        dancer.pair = null;
        dancer.$node.removeClass(dancer.danceClass);
      }, 10000);

    });
  });

  $('body').on('mouseover','.sfx',function(){
    sfx.play();
  });

});

