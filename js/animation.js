//生成随机数字的动画
function numAnimation(ranx, rany, randomNum) {
  // 获取相应的二维数组对应的数字格
  let numberCell = document.getElementById("number-" + ranx + "-" + rany)
  // 给数字格添加样式
  numberCell.innerHTML = randomNum
  numberCell.style.backgroundColor = getCellBgc(randomNum)
  numberCell.style.color = getCellColor(randomNum)
  setTimeout(() => {
    numberCell.style.transform = 'scale(1,1)'
  }, 0)
}




// // 格子移动的动画
// function moveAnimation(row1, col1, row2, col2) {
//   // 拿到当前数字格子
//   let numberCell = document.getElementById("number-" + row1 + "-" + col1)
//   numberCell.style.top = getPosTop(row2, col2) + 'px'
//   numberCell.style.left = getPosLeft(row2, col2) + 'px'
//   console.log(numberCell.style.left);

//   numberCell.style.transition = 'left 100ms ease'
// }


// 格子移动过程的动画
// function moveAnimation(fromY, fromX, toY, toX) {
//   // 拿到当前数字格子
//   let numberCell = document.getElementById("number-" + fromY + "-" + fromX)
//   // numberCell.style.top = getPosTop(toY, toX)
//   // numberCell.style.left = getPosLeft(toY, toX)
//   moveX = (toX - fromX) * 120
//   moveY = (toY - fromY) * 120
//   console.log(moveX);

//   numberCell.style.transform = 'translateX(' + moveX + 'px)'

// }