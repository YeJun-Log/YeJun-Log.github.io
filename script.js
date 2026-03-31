// 스크롤 애니메이션 옵저버 
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


// 2. HTML에 데이터를 꽂아넣을 공간 찾기
const projectListContainer = document.getElementById('project-list');

// 3. 데이터 배열을 돌면서 HTML 문자열 조립하기
if (projectListContainer) {
    let htmlString = ""; // 텅 빈 문자열 준비

    projectData.forEach(project => {
        // 태그(기술 스택)들을 HTML <span> 태그로 변환
        const tagsHtml = project.tags.map(tag => `<span>${tag}</span>`).join('');

        // 백틱(`)을 사용하면 문자열 중간에 변수(${...})를 쏙쏙 넣을 수 있어!
        htmlString += `
            <article class="project-card" onclick="location.href='detail.html?id=${project.id}'">
                <div class="card-header">
                    <span class="status-badge ${project.statusClass}">${project.statusText}</span>
                    <h3>${project.title}</h3>
                </div>
                <p>${project.summary}</p>
                <div class="tech-stack">
                    ${tagsHtml}
                </div>
            </article>
        `;
    });

    // 4. 완성된 HTML 문자열을 실제 화면에 밀어넣기
    projectListContainer.innerHTML = htmlString;
}

// --- [상세 페이지 전용 로직] ---
// 현재 URL에서 파라미터(예: ?id=winform) 읽어오기
const urlParams = new URLSearchParams(window.location.search);
const currentProjectId = urlParams.get('id');

// 상세 페이지의 뼈대(detail-title)가 현재 화면에 존재할 때만 실행
if (currentProjectId && document.getElementById('detail-title')) {
    
    // JSON 데이터 배열에서 id가 일치하는 프로젝트 찾기
    const project = projectData.find(p => p.id === currentProjectId);

    if (project) {
        // 1. 텍스트 및 이미지 데이터 꽂아넣기
        document.getElementById('detail-title').innerText = project.title;
        document.getElementById('detail-desc').innerText = project.detailDesc;
        document.getElementById('detail-image').src = project.image;
        
        // 2. 뱃지 데이터 꽂아넣기
        const badge = document.getElementById('detail-badge');
        badge.innerText = project.statusText;
        badge.classList.add(project.statusClass); // ongoing 또는 completed 클래스 추가

        // 3. 기술 스택(태그) HTML로 조립해서 꽂아넣기
        document.getElementById('detail-tags').innerHTML = 
            project.tags.map(tag => `<span>${tag}</span>`).join('');

        // 4. 타임라인 HTML로 조립해서 꽂아넣기
        let timelineHtml = "";
        project.timeline.forEach(item => {
            timelineHtml += `
                <li class="timeline-item">
                    <div class="timeline-date">${item.date}</div>
                    <div class="timeline-content">
                        <h3>${item.title}</h3>
                        <p>${item.desc}</p>
                    </div>
                </li>
            `;
        });
        document.getElementById('detail-timeline').innerHTML = timelineHtml;

    } else {
        // 주소창에 이상한 id를 치고 들어왔을 때
        document.querySelector('.project-detail-section').innerHTML = "<h1 style='text-align:center;'>존재하지 않는 프로젝트입니다.</h1>";
    }
}

// --- [Contact 페이지 전용 로직] ---
// --- [Contact 페이지 전용 로직 (EmailJS 연동)] ---

// 1. EmailJS 초기화 (여기에 네 Public Key를 넣어!)
// 주의: 따옴표 안에 아까 메모한 키를 정확히 복사해서 넣어.
if (typeof emailjs !== 'undefined') {
    emailjs.init("TCzQtw8e8vnq7EMnG"); 
}

const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // 기본 새로고침 막기
        
        // 버튼 텍스트를 '전송 중...'으로 바꿔서 사용자에게 피드백 주기 (UX 디테일)
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerText;
        submitBtn.innerText = "전송 중...";
        submitBtn.disabled = true; // 중복 클릭 방지

        // 2. EmailJS로 데이터 쏘기
        // emailjs.sendForm('서비스ID', '템플릿ID', 폼데이터(this))
        emailjs.sendForm('service_zqn4idj', 'template_hxqj1sf', this)
            .then(function() {
                // 성공했을 때 실행되는 코드
                alert('메시지가 성공적으로 전송되었습니다! 확인 후 연락드리겠습니다.');
                contactForm.reset(); 
                submitBtn.innerText = originalBtnText; // 버튼 원상복구
                submitBtn.disabled = false;
            }, function(error) {
                // 실패했을 때 실행되는 코드
                alert('전송에 실패했습니다. 다시 시도해 주세요.\n에러 내용: ' + JSON.stringify(error));
                submitBtn.innerText = originalBtnText;
                submitBtn.disabled = false;
            });
    });
}

// --- [모바일 햄버거 메뉴 토글 로직] ---
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        // 메뉴창을 열고 닫음 (active 클래스 추가/제거)
        navLinks.classList.toggle('active');
        
        // 햄버거 버튼을 X 모양으로 바꿈 (toggle 클래스 추가/제거)
        hamburger.classList.toggle('toggle');
    });
}