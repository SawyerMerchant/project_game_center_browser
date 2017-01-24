var view = {

  initialize: function() {
    // $('.score-board').hide();
    model.sizeOptions();
    model.speedOptions();
  },

  initializeBoard: function(size) {
    $('#messages').hide("slow");
    $('#welcome').hide("slow");
    view.renderGrid(size);
    $('.score-board').show("slow");
    $('#grid').addClass('active');
  },

  renderGrid: function(size) {
    var $grid = $('#grid');
    for (var y = 0; y < size; y++) {
      var $currentRow = $('<div>').addClass('cell-row');
      $currentRow.appendTo($grid);
      for (var x = 0; x < size; x++) {
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
    $('#replay').show("slow");
  },

  renderFood: function(foodDiv) {
    $(foodDiv).addClass('food');
  },

  clearTail: function(removed) {
    removed.removeClass('snake');
  },

  updateScore: function() {
    $scoreBoard = $('h1', '.score-board');
    $('.score').remove();
    $score = $('<span class="score">' + (model.snakeBody.length - 2) + '</span>');
    $scoreBoard.append($score);
    $scoreBoard.show("slow");
  },

  replay: function() {

    // remove active from grid
    $('#grid').removeClass('active')
              .empty();
    // hide replay
    $('#replay').hide('slow');
    // show welcome
    $('#welcome').show('slow');
    // hide score
    $('.score-board').hide('slow');
  },
};
