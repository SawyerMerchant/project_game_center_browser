var model = {

  // make dynamic
  height: 50,
  width: 50,
  snakeHead: [0,0],
  snakeBody: [$('#0_0')],
  direction: "r",

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

  gameOver: function() {
    var gameOver = false;
    //hit right wall
    if (model.snakeHead[0] > (model.width - 1)
    //hit bottom wall
     || model.snakeHead[1] > (model.height - 1)
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
      $blanks = $('div').not(".snake");
      var $food = $blanks[Math.floor(Math.random()*$blanks.length)];
      view.renderFood($food);
    }
  },



};
