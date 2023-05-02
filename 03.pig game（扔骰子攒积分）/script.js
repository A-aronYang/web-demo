'use strict';

// 新的游戏按钮
let btnNew = document.querySelector(".btn--new")
// 掷骰子按钮
let btnRoll = document.querySelector(".btn--roll")
// 保存按钮
let btnHold = document.querySelector(".btn--hold")

// 骰子
let dice = document.querySelector(".dice")

// 玩家1
let palyer1 = document.querySelector("#name--0")
// 玩家1分数
let sorce1 = document.querySelector("#score--0")

// 玩家2
let palyer2 = document.querySelector("#name--1")
// 玩家2分数
let sorce2 = document.querySelector("#score--1")


function getDiceNumber() {
  let randomNumber = Math.trunc(Math.random() * 6) + 1
  return randomNumber
}

function changePlayer() {
  
}

btnRoll.addEventListener("click", function () {
  let diceNumber = getDiceNumber()
  if (diceNumber === 1) {
    changePlayer()
  }
  dice.src = `dice-${diceNumber}.png`
})