// 버튼을 클릭했을 때 실행될 함수(기능)
function sayHello() {
  alert("Hello!");
}

window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
    navbar.style.padding = '15px 10%';
  } else {
    navbar.style.boxShadow = 'none';
    navbar.style.padding = '20px 10%';
  }
});