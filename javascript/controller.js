var controller = {

  initialize: function() {
    view.initialize();
    $('#begin').on('click', function(){
      model.speed = $('#speed').val();
      model.size = $('#size').val();
      view.initializeBoard(model.size);
      controller.startGame();
    });
    $('#restart').on('click', function() {
      model.replay();
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
        view.declareGameOver();
      }
      view.updateScore();
      // move tail
      model.moveTail(model.eatFood());
      //renderSnake
      view.renderSnake();
      //check for direction change
      view.directionChange();
      //check for game pause
    }, model.speed);
  },
};

$(function() {
  controller.initialize();
});
