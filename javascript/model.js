var model = {


  // make dynamic
  height: 50,
  width: 50,
  snakeHead: [0,0],
  snakeBody: [],
  direction: "r",

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
    view.renderSnake(model.buildSnake());
  },

  // use unshift for adding to head

  changeDirection: function() {

  },

  buildSnake: function() {
    var return_arr = [];
    var $head = $('#' + model.snakeHead[0] + '_' + model.snakeHead[1]);
    return_arr.push($head);
    for (var i = 0; i < model.snakeBody.length; i++) {
      var $snakePart = $('#' + model.snakeBody[i][0] + '_' + model.snakeBody[i][1]);
      return_arr.push($head);
    }
    return return_arr;
  },

  moveTail: function() {

  },

  gameLoop: function() {
    //check for game over
    //check for direction change - or do we need to?
    //move snake
    model.moveHead();
    //check for eat food
    //move tail
    //check for game pause
  }

};
