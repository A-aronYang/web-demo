'use strict';

const modalbtns = document.querySelectorAll(".show-modal")
const closebtn = document.querySelector(".close-modal")
const modal = document.querySelector(".modal")
const overlay = document.querySelector(".overlay")

const opneModal = () => {
  modal.classList.remove("hidden")
  overlay.classList.remove("hidden")
}

const closeModal = () => {
  modal.classList.add("hidden")
  overlay.classList.add("hidden")
}

// 点击模态框按钮 打开模态框
modalbtns.forEach((modal) => {
  modal.addEventListener("click", opneModal)
})

// 点击关闭按钮 关闭模态框
closebtn.addEventListener("click", closeModal)

// 点击蒙版 
overlay.addEventListener("click", closeModal)

// 按下 esc 按键 关闭模态框
document.addEventListener("keydown" , function (e) {
  if (e.code === 'Escape' && !modal.classList.contains("hidden")) {
    closeModal()
  }
})