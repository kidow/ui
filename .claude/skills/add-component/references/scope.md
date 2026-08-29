# 무엇까지 받는가

shadcn 레지스트리에서 온 것만 받는 게 아니다. 기준은 **"React + Tailwind로 이 사이트에서 렌더되는가"** 다.

## 받는다

| 종류 | 처리 |
|---|---|
| shadcn 호환 레지스트리 (MagicUI, OriginUI, Kibo 등) | 기본 경로. `/r/*.json` 그대로 변환 |
| Tailwind + React인데 레지스트리는 없음 (21st.dev, react-bits, 블로그 코드) | 문서 코드 블록에서 추출 → 색 토큰 치환 → 등록 |
| 별도 `.css` 파일이 딸린 컴포넌트 | css 파일도 `files` 에 넣고 `type: "registry:file"`, `target` 명시 |
| 훅 (`use-*`) | `type: "registry:hook"`, target은 `hooks/kidow/<name>.ts` |
| 순수 HTML/CSS 스니펫 (Uiverse 등) | **포팅**이므로 아래 주의사항 참고 |

## 안 받는다

| 종류 | 이유 |
|---|---|
| Vue / Svelte / Angular / 웹 컴포넌트 | 이 사이트가 React라 프리뷰 불가. 레지스트리에만 있고 확인 못 하는 아이템은 만들지 않는다 |
| CSS-in-JS 프레임워크 의존 (MUI, Chakra, styled-components, Emotion) | 아이템 하나 때문에 사이트가 그 런타임 전체를 물게 된다. 정말 필요하면 **사용자에게 먼저 묻는다** |
| 라이선스 불명 | 예외 없음. 확인 못 하면 추가하지 않는다 |
| 유료/상용 라이선스 (Tailwind UI, Tailwind Plus 등) | 재배포 불가. 링크만 걸고 싶어도 담지 않는다 |

## HTML/CSS 스니펫을 React로 감쌀 때

이건 정규화가 아니라 **포팅**이다. 우리가 손을 많이 대게 되므로:

- 마크업 구조와 CSS는 원본 그대로 유지한다. 클래스명을 Tailwind로 옮겨 쓰지 않는다 — 그러면 원본이 사라진다.
- CSS는 별도 파일로 두고 `registry:file` 로 함께 배포한다.
- `description` 에 "원본 HTML/CSS를 React 컴포넌트로 감쌈" 을 명시한다.
- `meta.author` 는 여전히 **원저자**. 우리가 감쌌다고 저자가 바뀌지 않는다.
- 라이선스 확인이 특히 중요하다. 스니펫 사이트는 사이트 전체 라이선스와 개별 작성자 라이선스가 다를 수 있다.

## 판단이 서지 않을 때

받을지 말지 애매하면 추가하지 말고 사용자에게 묻는다.
"기술적으로 되는가" 보다 **"이 사이트에서 프리뷰가 도는가"** 와 **"라이선스가 명확한가"** 를 먼저 본다.
