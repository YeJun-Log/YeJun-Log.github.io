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
        id: "winform",
        statusClass: "ongoing",
        statusText: "진행 중",
        title: "Windows 폼 데스크톱 앱",
        summary: "C# WinForms를 활용하여 화면을 구성하고 이벤트를 처리하는 애플리케이션 구조 학습.",
        tags: ["C++", "C#", ".NET", "WinForms", "WinUI3"],
        detailDesc: "C#의 객체지향적 특징을 이해하고, 이벤트 주도(Event-Driven) 방식을 실습하기 위해 직접 코드를 짜며 제작한 데스크톱 애플리케이션입니다.",
        image: "/images/CSharp.png",
        timeline: [
            { date: "2026.03", title: "C# 기초 문법 학습", desc: "클래스, 객체, 상속 등 기초 개념 숙지" },
            { date: "2026.04", title: "UI 및 이벤트 구현", desc: "버튼 클릭 이벤트 및 데이터 처리 로직 작성" }
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