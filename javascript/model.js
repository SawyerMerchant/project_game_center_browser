var model = {

  // make dynamic
  height: 50,
  width: 50,
  snakeHead: [0,0],
  // headID: $('#' + this.snakeHead[0] + '_' + this.snakeHead[1]),
  snakeBody: [[0,0]],
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
    model.snakeBody.unshift(model.snakeBody);
  },

  // use unshift for adding to head

  buildSnake: function() {
    var return_arr = [];
    var $head = $('#' + this.snakeHead[0] + '_' + this.snakeHead[1]);
    return_arr.push($head);
    for (var i = 0; i < model.snakeBody.length; i++) {
      var $snakePart = $('#' + model.snakeBody[i][0] + '_' + model.snakeBody[i][1]);
      return_arr.push($head);
    }
    return return_arr;
  },

  moveTail: function() {
    var removed = model.snakeBody.pop();
    var removedID = model.buildID(removed);
    view.clearTail(removedID);
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
