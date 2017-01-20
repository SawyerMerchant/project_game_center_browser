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

  renderSnake: function(snake) {
    var $snake = snake;
    for (var i = 0; i < $snake.length; i++) {
      $snake[i].addClass('snake');
    }
  }
};
