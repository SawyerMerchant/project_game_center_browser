var controller = {

  initialize: function() {
    view.initialize();
    $('#begin').on('click', function(){
      controller.startGame();
    });
  },


  startGame: function() {
    //200 slow 100 fast
    var game = setInterval(function(){model.gameLoop(); }, 150);

  },


};


$(function() {
  controller.initialize();
});
