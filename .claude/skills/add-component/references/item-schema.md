# registry.json 아이템 스키마

```json
{
  "name": "<kebab-case 이름>",
  "type": "registry:component",
  "title": "<Title Case>",
  "description": "<한 줄 한국어 설명>",
  "categories": ["<카테고리>"],
  "dependencies": ["<npm 패키지>"],
  "registryDependencies": ["button"],
  "files": [
    {
      "path": "registry/ui/<name>/<name>.tsx",
      "type": "registry:component",
      "target": "components/kidow/<name>.tsx"
    }
  ],
  "cssVars": {
    "theme": { "animate-marquee": "marquee var(--duration) infinite linear" }
  },
  "css": {
    "@keyframes marquee": {
      "from": { "transform": "translateX(0)" },
      "to": { "transform": "translateX(calc(-100% - var(--gap)))" }
    }
  },
  "meta": {
    "source": "MagicUI",
    "sourceUrl": "https://magicui.design/docs/components/marquee",
    "author": "dillionverma",
    "license": "MIT",
    "retrievedAt": "2026-08-29"
  }
}
```

## 필드 규칙

- **type** — 대부분 `registry:component`. UI 프리미티브면 `registry:ui`, 훅이면 `registry:hook`, 블록(여러 파일 조합)이면 `registry:block`.
- **registryDependencies** — shadcn/ui 기본 컴포넌트는 **이름만** (`"button"`, `"dialog"`). CLI가 공식 shadcn에서 설치한다. 우리 레지스트리에 복제하지 않는다.
- **dependencies** — npm 패키지명 배열. 버전은 원본이 고정하지 않는 한 안 적는다.
- **files[].path** — 항상 `registry/` 로 시작하는 저장소 기준 경로. 사이트가 이 경로로 소스를 읽는다.
- **files[].target** — 항상 `components/kidow/<파일명>` 으로 명시한다. 생략하면 소비자의 `components/ui/` 나 `components/` 루트로 떨어져 기존 파일과 충돌한다. 이름 충돌 방어의 마지막 방벽이므로 빠뜨리지 않는다.
- **categories** — 사이트 목록의 그룹 키. 한국어로 적어도 된다.
- **cssVars / css** — 원본 레지스트리 JSON에 있으면 **그대로 복사한다.** 애니메이션 유틸(`animate-*`)과 `@keyframes` 가 여기 들어있다. 빠뜨리면 설치는 되는데 움직이지 않는 컴포넌트가 된다. `shadcn add` 가 소비자의 `globals.css` 에 자동 주입한다.
- **meta** — 5개 필드 전부 필수. 하나라도 비우면 사이트 출처 표기가 깨진다.
  - `retrievedAt` 은 `date +%F` 결과를 쓴다.
  - `license` 는 SPDX 식별자 (`MIT`, `Apache-2.0`). 확인 못 하면 아이템을 추가하지 않는다.

## 데모는 여기 넣지 않는다

`components/demos/<name>.tsx` 는 사이트 전용이라 `files` 에 포함하지 않는다. 배포되는 `/r/<name>.json` 에는 컴포넌트 소스만 들어간다.
