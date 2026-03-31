// 스크롤 애니메이션 옵저버 (네가 설정한 0.2값 적용)
const observerOptions = {
    threshold: 0.2 // 요소가 화면에 20% 보일 때 작동
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // 화면에 나타나면 'visible' 클래스를 추가해서 애니메이션 실행
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// HTML에서 'scroll-fade' 클래스를 가진 모든 요소를 감시
document.querySelectorAll('.scroll-fade').forEach((el) => {
    observer.observe(el);
});