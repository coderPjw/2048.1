document.addEventListener('keyup', (e) => {
  // moveLeft()
  switch (e.keyCode) {
    case 37:
      if (canMoveLeft()) {
        // 如果可以向左移动，则随机生成一个数字
        getRandom()
        // 每次移动判断游戏是否结束
        isOver()
      }
      break;
    case 38:
      if (canMoveUp()) {
        getRandom()
        // 每次移动判断游戏是否结束
        isOver()
      }
      break;
    case 39:
      if (canMoveRight()) {
        // 如果可以向左移动，则随机生成一个数字
        getRandom()
        // 每次移动判断游戏是否结束
        isOver()
      }
      break;
    case 40:
      if (canMoveDown()) {
        // 如果可以向左移动，则随机生成一个数字
        getRandom()
        // 每次移动判断游戏是否结束
        isOver()
      }
      break;
  }
})

// 封装一个判断是否可以移动的函数 用于返回bool 
function canMoveLeft() {
  if (!moveLeft()) {
    return false
  }
  for (let i = 0; i < 4; i++) {
    for (let j = 1; j < 4; j++) {
      if (board[i][j] != 0) {
        // 拿到不等于0的格子 不等于0就判断是否可以向左进行移动
        // 移动到哪个格子的条件是：目标格子不等于0， 并且中间格子也不为0
        for (let k = 0; k < j; k++) {
          // board[i][k] 就是遍历的目标格子
          if (board[i][k] === 0 && noBlock(i, k, j, board)) {
            let ele = document.querySelector('#number-' + i + '-' + j)
            board[i][k] = board[i][j];
            board[i][j] = 0;
            updateNumberCell()
          } else if (board[i][k] == board[i][j] && noBlock(i, k, j, board)) {
            board[i][k] += board[i][j]
            board[i][j] = 0;
            updateNumberCell()
          }
        }
      }
    }
  }
  return true
}

// 向左移动的逻辑
// 向左移动 需要判断每一个格子是否可以移动，左边一列不用判断
function moveLeft() {
  for (let i = 0; i < 4; i++) {
    for (let j = 1; j < 4; j++) {
      if (board[i][j] != 0) {
        if (board[i][j - 1] == 0 || board[i][j - 1] == board[i][j]) {
          return true
        }
      }
    }
  }
  return false
}

function canMoveRight() {
  if (!moveRight()) {
    return false
  }
  for (let i = 0; i < 4; i++) {
    for (let j = 2; j >= 0; j--) {
      if (board[i][j] != 0) {
        // 拿到不等于0的格子 不等于0就判断是否可以向左进行移动
        // 移动到哪个格子的条件是：目标格子不等于0， 并且中间格子也不为0
        for (let k = 3; k > j; k--) {
          // board[i][k] 就是遍历的目标格子
          if (board[i][k] === 0 && noBlock(i, j, k, board)) {
            // moveAnimation(i, j, i, k)
            board[i][k] = board[i][j];
            board[i][j] = 0;
            updateNumberCell()
          } else if (board[i][k] == board[i][j] && noBlock(i, j, k, board)) {
            board[i][k] += board[i][j]
            board[i][j] = 0;
            updateNumberCell()
          }
        }
      }
    }
  }
  return true
}

function moveRight() {
  for (let i = 0; i < 4; i++) {
    for (let j = 2; j >= 0; j--) {
      if (board[i][j] != 0) {
        if (board[i][j + 1] == 0 || board[i][j + 1] == board[i][j]) {
          return true
        }
      }
    }
  }
  return false
}

function canMoveUp() {
  if (!moveUp()) {
    return false
  }
  for (let i = 1; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (board[i][j] != 0) {
        // 拿到不等于0的格子 不等于0就判断是否可以向左进行移动
        // 移动到哪个格子的条件是：目标格子不等于0， 并且中间格子也不为0
        for (let k = 0; k < i; k++) {
          // board[k][j] 就是遍历的目标格子
          if (board[k][j] === 0 && noBlockUp(i, k, j, board)) {
            board[k][j] = board[i][j];
            board[i][j] = 0;
            updateNumberCell()
          } else if (board[k][j] == board[i][j] && noBlockUp(i, k, j, board)) {
            board[k][j] += board[i][j]
            board[i][j] = 0;
            updateNumberCell()
          }
        }
      }
    }
  }
  return true
}

function moveUp() {
  for (let i = 1; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (board[i][j] != 0) {
        if (board[i - 1][j] == 0 || board[i - 1][j] == board[i][j]) {
          return true
        }
      }
    }
  }
  return false
}

function canMoveDown() {
  if (!moveDown()) {
    return false
  }
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 4; j++) {
      if (board[i][j] != 0) {
        // 拿到不等于0的格子 不等于0就判断是否可以向左进行移动
        // 移动到哪个格子的条件是：目标格子不等于0， 并且中间格子也不为0
        for (let k = 3; k > i; k--) {
          // board[k][j] 就是遍历的目标格子
          if (board[k][j] === 0 && noBlockUp(k, i, j, board)) {
            board[k][j] = board[i][j];
            board[i][j] = 0;
            updateNumberCell()
          } else if (board[k][j] == board[i][j] && noBlockUp(k, i, j, board)) {
            board[k][j] += board[i][j]
            board[i][j] = 0;
            updateNumberCell()
          }
        }
      }
    }
  }
  return true
}

function moveDown() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 4; j++) {
      if (board[i][j] != 0) {
        if (board[i + 1][j] == 0 || board[i + 1][j] == board[i][j]) {
          return true
        }
      }
    }
  }
  return false
}


// 判断中间是否有格子的函数
function noBlock(i, k, j, board) {
  for (var m = k + 1; m < j; m++) {
    if (board[i][m] != 0) {
      return false
    }
  }
  return true
}

function noBlockUp(i, k, j, board) {
  for (var m = k + 1; m < i; m++) {
    if (board[m][j] != 0) {
      return false
    }
  }
  return true
}

function isOver() {
  // console.log('游戏结束判断还没做');
}