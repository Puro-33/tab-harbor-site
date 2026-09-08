const sections = [
  { id: 'information', title: '어떤 정보를 보관하나요?', paragraphs: [
    '저장 동작을 선택하면 탭의 URL, 제목, 순서, 고정 여부를 읽습니다. 사용자가 작성한 묶음 이름, 메모, 태그, 저장 시각, 다시 연 시각과 보관 상태도 함께 저장합니다.',
    '페이지 본문, 폼 입력, 쿠키, 페이지 저장소, 스크롤 위치를 별도로 읽지 않습니다. URL은 검색어와 주소 매개변수를 포함한 원문으로 저장하므로, 주소 안의 인증 코드 등 민감한 값도 기록과 JSON 백업에 포함될 수 있습니다. 민감한 주소는 저장하지 않거나 해당 묶음을 삭제하세요.',
  ] },
  { id: 'storage', title: '어디에 저장하고 어떻게 사용하나요?', paragraphs: [
    '정보는 사용 중인 Chrome 프로필에 속한 확장 프로그램의 IndexedDB에 저장하며 탭 보관, 검색, 다시 열기에 사용합니다. 개발자 서버, 광고업체 또는 분석 서비스로 전송하지 않습니다. 별도 계정이나 자동 기기 간 동기화는 없습니다.',
    '보관한 주소를 다시 열면 해당 웹사이트와 브라우저가 통상적인 방식으로 통신합니다. 다시 열기는 URL을 여는 기능이며, 로그인 상태나 페이지의 입력 내용을 복구하는 기능은 아닙니다.',
  ] },
  { id: 'backup', title: '기록과 백업은 내가 관리합니다.', paragraphs: [
    '보관함에서 묶음을 삭제할 수 있습니다. JSON으로 내보내면 사용자가 선택한 파일에 보관 정보가 담깁니다. 다른 사람이 파일을 얻으면 URL과 메모를 읽을 수 있으므로 백업 파일의 보관, 공유, 삭제는 직접 관리해 주세요.',
    '지원하는 브라우저에서는 저장 시 자동 정리를 줄이기 위한 지속 저장을 요청합니다. 허용 여부와 브라우저 설정에 따라 저장 공간이 정리될 수 있습니다. 확장 프로그램이나 Chrome 프로필을 삭제하기 전에는 필요한 기록을 반드시 백업하세요.',
    '현재 보관 한도는 1,000개 묶음, 전체 10,000개 탭, JSON 기준 10 MB이며 한 묶음에 최대 1,000개 탭을 저장합니다.',
  ] },
  { id: 'permissions', title: '탭 권한은 저장과 다시 열기에 사용합니다.', paragraphs: [
    'tabs 권한으로 사용자가 지정한 탭들의 URL과 제목을 읽고 보관한 주소를 다시 엽니다. 방문 페이지에 코드를 삽입하거나 자동으로 전체 방문 기록을 수집하지 않습니다.',
    '저장 후 닫기는 기본으로 꺼져 있습니다. 사용자가 선택했을 때만 DB 저장 완료 후 원래 주소가 그대로인 탭을 닫습니다. 저장할 수 없는 주소와 닫지 못한 탭은 결과에 표시합니다.',
  ] },
];
export default function Home() {
  return <div className="page">
    <header className="site-header">
      <a className="brand" href="#top"><img src="/icon.png" width="38" height="38" alt="" /><span>Tab Harbor</span></a>
      <nav aria-label="페이지 탐색"><a href="#privacy">개인정보 안내</a><a href="#backup">백업과 삭제</a></nav>
    </header>
    <main id="top">
      <section className="intro" aria-labelledby="intro-title">
        <div><h1 id="intro-title">탭은 잠시 닫고,<br />기록은 남겨 두세요.</h1><p className="lead">Tab Harbor는 선택한 탭과 URL을 대기 목록에 보관하고,<br className="desktop-break" /> 필요할 때 다시 여는 Chrome 탭 보관함입니다.</p></div>
        <div className="collection" aria-label="저장 방식 요약"><span className="collection-tab">내 탭 보관함</span><p>내 Chrome 안에.<br />다시 필요할 때까지.</p><span className="collection-note">로컬 저장 · 계정 가입 없음</span></div>
      </section>
      <div className="facts"><p><strong>선택한 탭만</strong><span>저장 버튼을 누를 때 보관</span></p><p><strong>내 프로필에 저장</strong><span>개발자 서버로 전송하지 않음</span></p><p><strong>직접 백업하고 삭제</strong><span>URL과 메모를 JSON으로 관리</span></p></div>
      <article id="privacy" className="privacy">
        <div className="privacy-heading"><h2>개인정보처리방침</h2><p>시행일 2026년 9월 7일</p></div>
        <p className="policy-scope">이 안내는 Tab Harbor 확장 프로그램이 처리하는 보관 정보에 관한 설명입니다.</p>
        {sections.map((section) => <section id={section.id} key={section.id} className="policy-section"><h3>{section.title}</h3>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}
        <section className="policy-section"><h3>사용 범위를 제한합니다.</h3><p>Tab Harbor에서 처리하는 사용자 데이터의 사용과 이전은 <a href="https://developer.chrome.com/docs/webstore/program-policies/user-data" target="_blank" rel="noopener noreferrer">Chrome 웹 스토어 사용자 데이터 정책</a>의 Limited Use 요구사항을 따릅니다. 사용자 데이터를 광고, 판매, 신용도 평가에 사용하지 않습니다.</p></section>
        <section id="contact" className="policy-section"><h3>문의와 변경</h3><p>게시된 Chrome 웹 스토어 항목의 개발자 연락처로 문의할 수 있습니다. 정보 처리 방식이 바뀌면 이 방침과 확장의 안내를 함께 갱신합니다.</p><p className="release-note">현재 확장은 스토어 출시 준비 중입니다. 이 페이지는 개인정보처리방침이며 설치나 게시 완료를 알리는 페이지는 아닙니다.</p></section>
      </article>
    </main>
    <footer><span>Tab Harbor · 탭 보관함</span><a href="#top">위로 돌아가기</a></footer>
  </div>;
}