// 获得当前格子的上距离
function getPosTop(i, j) {
  return 20 + i * 120
}
// 获得当前格子的左距离
function getPosLeft(i, j) {
  return 20 + j * 120
}

// 根据数字选择格子背景颜色
function getCellBgc(randomNum) {
  switch (randomNum) {
    case 2:
      return "#eee4da";
      break;
    case 4:
      return "#ede0c8";
      break;
    case 8:
      return "#f2b179";
      break;
    case 16:
      return "#f59563";
      break;
    case 32:
      return "#f67c5f";
      break;
    case 64:
      return "#f65e3b";
      break;
    case 128:
      return "#edcf72";
      break;
    case 256:
      return "#edcc61";
      break;
    case 512:
      return "#9c0";
      break;
    case 1024:
      return "#33b5e5";
      break;
    case 2048:
      return "#09c";
      break;
  }
}
// 根据数字选择数字颜色
function getCellColor(randomNum) {
  if (randomNum <= 4) {
    return "#776e65"
  }
  return "white"
}


