'use strict';

// 设置随机数字
let secretNumber = Math.trunc(Math.random() * 20) + 1
// 获取输入框内容
const guessEl = document.querySelector(".guess")
// 获取检查按钮
const checkEl = document.querySelector(".check")
// 获取分数
const scoreEl = document.querySelector(".score")
// 获取高分
const highscoreEl = document.querySelector(".highscore")
// 获取问号
const numberEl = document.querySelector(".number") 
// 获取再来一次按钮
const againEl = document.querySelector(".again")
// 获取箭头
const plus = document.querySelector(".plus")
const minus = document.querySelector(".minus")
// 提示文字
const messageEl = document.querySelector(".message")
// 获取模态框
const modelEl = document.querySelector(".modal")
// 获取关闭按钮
const closeEl = document.querySelector(".close")
// 获取蒙版
const maskEl = document.querySelector(".mask")

// 定义分数
let score = 20
// 定义数字
let inputValue = +guessEl.value
// 定义最高分
let highscore = 0
// 设置通关变量
let gameOver = false
// 定义蒙版变量
let mask = false

// 点击箭头改变数字
plus.addEventListener("click", function () {
  if (guessEl.value == 20 || gameOver === true) return
  inputValue++
  guessEl.value = inputValue
  messageEl.textContent = '开始猜数字...'
})
// 点击箭头改变数字
minus.addEventListener("click", function () {
  if (guessEl.value == 1 || gameOver === true) return
  inputValue--
  guessEl.value = inputValue
  messageEl.textContent = '开始猜数字...'
})

// 输入框没有内容显示提示文字
guessEl.addEventListener('input', function () {
  inputValue = this.value
  if (score === 0) return
  if (!this.value) {
    messageEl.textContent = '⛔ 请输入数字 !'
  } else {
    messageEl.textContent = '开始猜数字...'
  }
})

// 猜对了改变背景为绿色
function checkNumber(number) {
  if (gameOver === true) return

  if (number == secretNumber) {
    scoreEl.textContent = score
    messageEl.textContent = '🎉 猜对啦!'
    changeColor('#60b347')
    numberEl.textContent = inputValue
    if (highscore <= score) {
      highscore = score
    }
    highscoreEl.textContent = highscore
    guessEl.disabled = true
    gameOver = true
    return
  } else if (number > secretNumber) {
    messageEl.textContent = '📈 猜高了!'
  } else if (number < secretNumber) {
    messageEl.textContent = '📉 猜低了!'
  }

  if (score === 0) {
    messageEl.textContent = '💥 你失败了!'
    gameOver = true
    guessEl.disabled = true
    return
  }
  scoreEl.textContent = --score
}

// 改变背景颜色
function changeColor(color) {
  document.body.style.backgroundColor = color
  document.querySelector(".plus").style.backgroundColor = color
  document.querySelector(".minus").style.backgroundColor = color
}

// 判断是否是1-20的数字
function isRightNumber() {
  if (guessEl.value <= 0 || guessEl.value > 20) {
    openModal()
    guessEl.value = ""
    messageEl.textContent = '⛔ 请输入数字 !'
    return
  }
  checkNumber(inputValue)
}

// 检查按钮监听
checkEl.addEventListener("click", function () {
  isRightNumber()
})

// 监听 enter 按键
document.addEventListener("keyup", function (e) {
  if (e.code === 'Enter') {
    if (mask === true) {
      closeModal()
    } else {
      isRightNumber()
    }
  }
})


// 再来一次
againEl.addEventListener("click", function () {
  changeColor('#222222')
  numberEl.textContent = "?"
  messageEl.textContent = '⛔ 请输入数字 !'
  scoreEl.textContent = score = 20
  guessEl.value = inputValue = ""
  secretNumber = Math.trunc(Math.random() * 20) + 1
  gameOver = false
  guessEl.disabled = false
})

// 打开模态框
function openModal() {
  modelEl.classList.remove("none")
  maskEl.classList.remove("none")
  mask = true
}

// 关闭模态框函数
function closeModal() {
  modelEl.classList.add("none")
  maskEl.classList.add("none")
  mask = false
}
// 关闭模态框
closeEl.addEventListener("click", closeModal)
maskEl.addEventListener("click", closeModal)