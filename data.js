const projectData = [
    {
        id: "gnosicore",
        statusClass: "ongoing",
        statusText: "진행 중",
        title: "GnosiCore System 구축",
        summary: "인스타그램 커뮤니티와 소통하며 함께 완성해 나가는 개인화 지식 관리 시스템 설계.",
        tags: ["Notion", "System Design", "Web", "Front-End"],
        // --- 여기서부터 상세 페이지용 데이터 ---
        detailDesc: "단순한 메모 앱을 넘어, 개인의 지식을 유기적으로 연결하고 관리하는 시스템입니다. 인스타그램 계정(@yejun.debug_log)을 통해 커뮤니티와 함께 모여 그노시코어를 완성하는 것을 목표로 합니다.",
        image: "/images/GnosiCore (1).jpg",
        timeline: [
            { date: "2026.02", title: "시스템 기획 및 설계", desc: "핵심 기능 정의 및 초기 커뮤니티 빌딩" },
            { date: "2026.03", title: "Notion 시스템 구현", desc: "Notion 데이터베이스와 API를 이용한 GnosiCore 페이지 구현"},
            { date: "2026.04", title: "웹 앱 퍼블리싱 기획", desc: "Notion 시스템의 한계를 체감하고, 시스템을 유연하게 실행할 수 있는 웹 앱 구상" }
        ]
    },
    {
        id: "x-summary",
        statusClass: "completed",
        statusText: "완료",
        title: "Xummary",
        summary: "Python과 Gemini API를 활용한, 최신 국제 경제 트윗 요약 및 메일 발송 서비스",
        tags: ["Python", "GEMINI", "GitHub"],
        detailDesc: "구글 시트에서 구독자와 트위터 계정을 불러오고, Gemini Flash Model API를 통해 요약하여 투자 리서치 보고서를 만든 후, GitHub Actions를 통해 매주마다 자동으로 메일로 발송하는 서비스입니다.",
        image: "/images/XummaryMain.png",
        timeline: [
            { date: "2026.04.02", title: "아이디어 구체화 및 구현 시작", desc: "구현에 Python을 사용하기로 확정 / Google AI Studio API 생성 및 트윗 크롤링 사이트 등록" },
            { date: "2026.04.04", title: "요약 보고서 생성 로직 구현 완료", desc: "Gemini API를 활용하여 수집한 트윗을 요약하고, 메일로 발송하는 로직 추가" },
            { date: "2026.04.05", title: "구글 시트를 이용해 확장성 극대화", desc: "트위터 계정과 구독자 목록을 구글 시트로 관리하여 추가 확장성 및 개인정보 보호 수준 향상" },
            { date: "2026.04.07", title: "개인 포트폴리오 리밸런싱 로직 추가", desc: "VIP를 위해 개인 투자 포트폴리오를 읽어들여 리밸런싱 조정안을 제공하는 로직 추가" },
            { date: "2026.04.08", title: "GitHub Actions 자동화 등록", desc: "GitHub Actions 기능을 활용해 매주 수요일 아침 메일 자동 발송 서비스 구현 완료" }
        ]
    },
    {
        id: "coding-test",
        statusClass: "ongoing",
        statusText: "진행 중",
        title: "알고리즘 코딩테스트",
        summary: "논리적 문제 해결 능력 향상을 위한 C++ 기초 문법 습득 및 알고리즘 풀이.",
        tags: ["C++", "Algorithm", "Data Structure"],
        detailDesc: "개발자의 기본기인 효율적인 코드 작성을 위해 자료구조와 알고리즘을 학습합니다. 기초 문법부터 시작해 점진적으로 난이도를 높여가고 있습니다.",
        image: "/images/solved.ac.png",
        timeline: [
            { date: "2026.03", title: "C++ 기초 뼈대 잡기", desc: "변수, 반복문, 포인터 등 코딩 선생님과 학습 시작" },
            { date: "2026.04", title: "기초 자료구조 적용", desc: "배열과 문자열을 활용한 구현 문제 풀이" }
        ]
    }
];