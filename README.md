# 표정수 포트폴리오

백엔드 개발자 포트폴리오 사이트입니다. 빌드 도구 없이 HTML · CSS · JS 파일 3개로 만들었고, GitHub Pages로 배포합니다.

## 파일 구성

| 파일 | 내용 |
| --- | --- |
| `index.html` | 사이트 본문 (소개 · 프로젝트 · 기술 · 연락처) |
| `styles.css` | 디자인 (라이트/다크 모드, 모바일, 인쇄용 스타일) |
| `script.js` | 다크 모드 전환, 인쇄할 때 접힌 항목 펼치기 |
| `.nojekyll` | GitHub Pages가 Jekyll 변환을 건너뛰게 하는 빈 파일 |
| `notion-drafts/` | 노션에 붙여 넣을 이력서 · 자기소개서 초안 (`.gitignore`로 저장소에서 제외) |

## 로컬에서 보기

`index.html`을 브라우저로 열면 됩니다.

## GitHub Pages 배포 (처음 한 번)

1. GitHub에서 `pyo-dev03.github.io` 이름으로 **Public** 저장소를 만듭니다.
   - 저장소 이름을 이렇게 지으면 주소가 `https://pyo-dev03.github.io`가 됩니다.
   - 다른 이름(예: `portfolio`)이면 주소가 `https://pyo-dev03.github.io/portfolio`가 됩니다.
2. 이 폴더를 저장소에 올립니다.

   ```bash
   git init
   git add .
   git commit -m "feat: 포트폴리오 사이트 초안"
   git branch -M main
   git remote add origin https://github.com/pyo-dev03/pyo-dev03.github.io.git
   git push -u origin main
   ```

3. 저장소 **Settings → Pages**에서 Source를 `Deploy from a branch`, Branch를 `main` / `/ (root)`로 지정하고 저장합니다.
4. 1~2분 뒤 위 주소로 접속해 확인합니다.

이후에는 파일을 고치고 `git push`만 하면 자동으로 다시 배포됩니다.
