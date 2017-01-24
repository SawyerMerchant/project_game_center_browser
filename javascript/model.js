var model = {

  snakeHead: [0,0],
  snakeBody: [$('#0_0')],
  direction: "r",
  score: 0,

  sizeOptions: function() {
    var pairOptions = [["Small", 20], ["Medium", 30], ["Large", 40]];
    var $selector = $('#size');
    $.each(pairOptions, function() {
      $selector.append($("<option />").val(this[1])
                                      .text(this[0])
      );
    });
    $selector.selectpicker({
      style: 'btn-primary',
    });
  },

  speedOptions: function() {
    var pairOptions = [["Slow", 200], ["Medium", 150], ["Fast", 100]];
    var $selector = $('#speed');
    $.each(pairOptions, function() {
      $selector.append($("<option />").val(this[1])
                                      .text(this[0])
      );
    });
    $selector.selectpicker({
      style: 'btn-primary',
    });
  },

  buildID: function(coords) {
    return $('#' + coords[0] + '_' + coords[1]);
  },

  moveHead: function() {
    switch (model.direction) {
      case "r":
        model.snakeHead[0] += 1;
        break;
      case "l":
        model.snakeHead[0] -= 1;
        break;
      case "u":
        model.snakeHead[1] -= 1;
        break;
      case "d":
        model.snakeHead[1] += 1;
        break;
      default:
    }
    $headID = model.buildID(model.snakeHead);
    model.snakeBody.unshift($headID);
  },

  eatFood: function() {
    var ateFood = false;
    var $head = model.buildID(model.snakeHead);
    if ($head.hasClass('food')) {
      $head.removeClass('food');
      ateFood = true;
    }
    return ateFood;
  },

  moveTail: function(food) {
    if (!food) {
      var $removedID = model.snakeBody.pop();
      view.clearTail($removedID);
    }
  },
// TODO make smaller methods
  gameOver: function() {
    var gameOver = false;
    //hit right wall
    if (model.snakeHead[0] > (model.size - 1)
    //hit bottom wall
     || model.snakeHead[1] > (model.size - 1)
    //hit left wall
     || model.snakeHead[0] < 0
    //hit top wall
     || model.snakeHead[1] < 0
    //hit self
     || $('#' + this.snakeHead[0] + '_' + this.snakeHead[1]).hasClass('snake')
    ) {
      gameOver = true;
    }
    return gameOver;
  },

  setFood: function() {
    if ($('.food').length < 1) {
      $blanks = $('.cell').not(".snake");
      var $food = $blanks[Math.floor(Math.random()*$blanks.length)];
      view.renderFood($food);
    }
  },

  replay: function() {
    view.replay();
    model.snakeHead = [0,0];
    model.snakeBody = [$('#0_0')];
    model.direction = "r";
    model.score = 0;
  }
};
