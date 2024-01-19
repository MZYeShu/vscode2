console.log(document.querySelector('.fanhui'))
//获取图片数组
const img = document.querySelector('.scl img')
const siderDate = [{ url: '../img/scroll01.webp', title: '双11Surface Pro 享最高7.7折', ctnt: ' 领券购买部分机型至高另减￥400，叠享24期分期免息，更有瑞幸卡相送。同享30天价保双十一。' },
{ url: '../img/scroll02.jpg', title: ' Surface Laptop Studio 2 多合一笔记本', ctnt: '购机赠微软专属数码礼盒，好礼7件套一次带回家' }]
// 定时器
// 信号量
let i = 0
// 定时器变量
let timeId = 0
//获取按钮元素
//点击暂停按钮
//获取暂停按钮
const zanting = document.querySelector('.zanting')
//左右切换按钮
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const icon = document.querySelector('.icon-zanting')
const adver01 = document.querySelector('.adver01 a')
const adver02 = document.querySelector('.adver02 a')
// 添加点击事件
next.addEventListener('click', function () {
  i >= 1 ? i = 0 : i++
  //加边框
  swth()
})
//左边按钮
prev.addEventListener('click', function () {
  i <= 0 ? i = 1 : i--
  swth()
})

//让它自己点击下一个
timeId = setInterval(function () {
  next.click()
  // console.log('报错');
}, 3000)

//自动播放事件
//点击暂定，定时器停止
//再次点击，定时器继续
zanting.addEventListener('click', function () {
  clearInterval(timeId)
  icon.classList.remove('icon-zanting')
  icon.classList.add('icon-zanting1')

})


next.addEventListener('mouseenter', function () {
  clearInterval(timeId)
})


prev.addEventListener('mouseenter', function () {
  clearInterval(timeId)
})



//鼠标移走，自动播放，开启定时器
prev.addEventListener('mouseleave', function () {
  clearInterval(timeId)
  timeId = setInterval(function () {
    next.click()
  }, 3000)

})
next.addEventListener('mouseleave', function () {
  clearInterval(timeId)
  timeId = setInterval(function () {
    next.click()
  }, 3000)

})

//在盒子外面加上一圈边框
function borderStyle() {

}
// console.log(document.querySelector(`.slider-indicator li:nth-child(${i+1})`))
//改变图片函数
function swth() {
  img.src = siderDate[i].url
  adver01.innerHTML = siderDate[i].title
  adver02.innerHTML = siderDate[i].ctnt
  //小圆点
  //先删除以前的小圆点
  document.querySelector('.slider-indicator .active').classList.remove('active')
  //加上现在的小圆点
  //  console.log(document.querySelector(`.slider-indicator li:nth-child(1)`));
  document.querySelector(`.slider-indicator li:nth-child(${i + 1})`).classList.add('active')
}
//返回首页
document.querySelector('.fanhui').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
})
window.onscroll=()=>{
  let scrolllDis = document.body.scrollTop || document.documentElement.scrollTop
  if(scrolllDis>300){
    document.querySelector('.fanhui').style.display = 'block'
  }
  else{
    document.querySelector('.fanhui').style.display = 'none'
  }
}

