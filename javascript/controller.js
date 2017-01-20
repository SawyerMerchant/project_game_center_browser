var controller = {

  initialize: function() {
    view.initialize();
    $('#begin').on('click', function(){
      controller.startGame();
    });
  },


  startGame: function() {
    //200 slow 100 fast
    var game = setInterval(function() {
      //set food
      model.setFood();
      //move head
      model.moveHead();
      //check for game over
      if (model.gameOver()) {
        // view.declareGameOver();
        clearInterval(game);
      }
      //check for eat food - pass true or false to move tail
      // move tail
      model.moveTail(model.eatFood());
      //renderSnake
      view.renderSnake();
      //check for direction change
      view.directionChange();
      //check for game pause
    }, 150);
  },


};


$(function() {
  controller.initialize();
});
