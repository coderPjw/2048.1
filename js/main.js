// 定义一个二维数组
// board 里面存放了当前二维数组的数据
var board = new Array();
// 初始化棋盘
function init() {
  for (let i = 0; i < 4; i++) {
    // 创建一个二维数组
    board[i] = new Array();
    for (let j = 0; j < 4; j++) {
      // 初始化小格子的值为0
      board[i][j] = 0;
      // 拿到每个小格子
      var gridCell = document.getElementById("grid-" + i + "-" + j);
      // 设置小格子的位置
      gridCell.style.top = getPosTop(i, j) + 'px'
      gridCell.style.left = getPosLeft(i, j) + 'px'
    }
  }
  updateNumberCell()
}

// 初始化数字格 
function updateNumberCell() {
  // 首先清除所有数字格
  let numberCell = document.querySelectorAll('.number-cell')
  numberCell.forEach(item => {
    item.remove()
  })
  // 然后再来添加数字格
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      let gridCont = document.querySelector('.grid-container')
      let numberCell = document.createElement('div')
      numberCell.setAttribute('class', 'number-cell')
      numberCell.setAttribute('id', "number-" + i + "-" + j)
      // 如果值为0，则隐藏
      if (board[i][j] == 0) {
        // 通过缩放效果来隐藏，达到中间展开的效果
        numberCell.style.transform = 'scale(0,0)'
        numberCell.style.top = getPosTop(i, j) + 'px'
        numberCell.style.left = getPosLeft(i, j) + 'px'
      } else {
        // 有值就生成
        numberCell.style.top = getPosTop(i, j) + 'px'
        numberCell.style.left = getPosLeft(i, j) + 'px'
        numberCell.innerHTML = board[i][j]
        numberCell.style.backgroundColor = getCellBgc(board[i][j])
        numberCell.style.color = getCellColor(board[i][j])
        numberCell.style.transform = 'scale(1,1)'
      }
      let numberCont = document.querySelector('.number-container')
      numberCont.appendChild(numberCell)
    }
  }
}

function getRandom() {
  // 生成两个随机数字
  // 2048 随机数只会生成2或者4
  var randomNum = Math.random() < .5 ? 2 : 4
  // 生成两个随机位置
  var ranx = parseInt(Math.random() * 4)
  var rany = parseInt(Math.random() * 4)
  // 只有当前位置不为0的格子，才可以生成随机数
  while (true) {
    if (board[ranx][rany] == 0) {
      break
    } else {
      var ranx = parseInt(Math.random() * 4)
      var rany = parseInt(Math.random() * 4)
    }
  }
  // 在随机的位置上显示随机的数字
  board[ranx][rany] = randomNum
  // 动画显示
  numAnimation(ranx, rany, randomNum)
}

function newGame() {
  // 初始化网格和数字格
  init()
  // 创建两个随机格子
  getRandom()
  getRandom()
}