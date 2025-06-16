function imgSlide(e) {
  document.querySelector("#phone").src = e;
}

function chengCircle(e){
  console.log(e)
  const circle = document.querySelector(".circle");
  circle.style.background = e;
}