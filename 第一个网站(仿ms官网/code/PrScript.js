//返回首页
document.querySelector('.fanhui').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
})
window.onscroll=()=>{
  let scrolllDis = document.body.scrollTop || document.documentElement.scrollTop
  if(scrolllDis>400){
    document.querySelector('.fanhui').style.display = 'block'
  }
  else{
    document.querySelector('.fanhui').style.display = 'none'
  }
}