'use strict';

// 新的游戏按钮
let btnNew = document.querySelector(".btn--new")
// 掷骰子按钮
let btnRoll = document.querySelector(".btn--roll")
// 保存按钮
let btnHold = document.querySelector(".btn--hold")

// 骰子
let diceEl = document.querySelector(".dice")

// 玩家1
let player1El = document.querySelector(".player--0")
let sorce01El = document.querySelector("#score--0")
let current01El = document.querySelector("#current--0")
// 玩家2
let player2El = document.querySelector(".player--1")
let sorce02El = document.querySelector("#score--1")
let current02El = document.querySelector("#current--1")

// 定义当前分数
let currentScore  
// 定义当前玩家
let currentPlayer  
// 定义玩家 总分
let scores  
// 定义游戏是否结束
let isOver  



// 初始化
function init() {
  currentScore = 0
  currentPlayer = 0
  scores = [0, 0]
  isOver = false
  // 重置分数
  current01El.textContent = 0
  current02El.textContent = 0
  sorce01El.textContent = 0
  sorce02El.textContent = 0
  // 隐藏骰子
  diceEl.classList.add('hidden')
}
init()

// 切换玩家函数
function switchPlayer() {
  // 切换玩家
  document.querySelector(`#current--${currentPlayer}`).textContent = 0
  currentScore = 0
  // currentPlayer = 1 - currentPlayer
  currentPlayer = currentPlayer === 0 ? 1 : 0
  player1El.classList.toggle("player--active")
  player2El.classList.toggle("player--active")
}

btnRoll.addEventListener("click", function () {
  if (isOver === true) {
    return
  }
  // 随机骰子
  let diceNumber = Math.trunc(Math.random() * 6) + 1
  // 显示骰子
  diceEl.classList.remove('hidden')
  diceEl.src = `dice-${diceNumber}.png`

  // 投掷一点 切换玩家，不是一点将投掷点数加到 当前分数
  if (diceNumber === 1) {
    switchPlayer()
  } else {
    // 显示当前分数
    currentScore += diceNumber
    document.querySelector(`#current--${currentPlayer}`).textContent = currentScore
  }

})


// 保存分数
btnHold.addEventListener("click", function () {
  if (isOver === true) {
    return
  }
  //  将当前分数添加到当前玩家的总分数
  scores[currentPlayer] += currentScore
  document.querySelector(`#score--${currentPlayer}`).textContent = scores[currentPlayer]

  // 达到20分获胜
  if (scores[currentPlayer] >= 20) {
    document.querySelector(`.player--${currentPlayer}`).classList.add("player--winner")
    document.querySelector(`.player--${currentPlayer}`).classList.remove("player--active")
    diceEl.classList.add('hidden')
    isOver = true
  } else {
    // 切换玩家
    switchPlayer()
  }
})

// // 新的游戏
btnNew.addEventListener("click", function () {
  document.querySelector(`.player--${currentPlayer}`).classList.remove("player--winner")
  document.querySelector(`.player--${currentPlayer}`).classList.remove("player--active")
  player1El.classList.add("player--active")
  init()
})