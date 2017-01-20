var view = {

  initialize: function() {
    view.renderGrid();
  },

  renderGrid: function() {
    var $grid = $('#grid');
    for (var y = 0; y < model.height; y++) {
      var $currentRow = $('<div>').addClass('row');
      $currentRow.appendTo($grid);
      for (var x = 0; x < model.width; x++) {
        var $cell = $('<div>').addClass('cell')
                             .attr('id', x + '_' + y);
        $cell.appendTo($currentRow);
      }
    }
  },

  renderSnake: function() {
    var $snake = model.snakeBody;
    for (var i = 0; i < $snake.length; i++) {
      $snake[i].addClass('snake');
    }
  },

  directionChange: function() {
    $(document).keydown(function(e) {
      switch(e.which) {
        case 37: // left
          model.direction = "l";
        break;

        case 38: // up
          model.direction = "u";
        break;

        case 39: // right
          model.direction = "r";
        break;

        case 40: // down
          model.direction = "d";
        break;
        default: return;
      }
      e.preventDefault(); // prevent the default action (scroll / move caret)
    });
  },

  declareGameOver: function() {

  },

  renderFood: function(foodDiv) {
    $(foodDiv).addClass('food');
  },

  clearTail: function(removed) {
    removed.removeClass('snake');
  },


};
