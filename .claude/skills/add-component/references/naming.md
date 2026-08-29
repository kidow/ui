# 이름 규칙과 충돌 처리

## 이름 짓는 순서

1. **특징 기반 이름을 먼저 쓴다.** `shimmer-button`, `rainbow-button`, `magnetic-button`, `bento-grid`.
   원본들도 대개 이렇게 지어져 있다 — 원본 이름이 이미 특징을 담고 있으면 그대로 쓴다.
2. 원본 이름이 너무 일반적이면(`button`, `card`) 문서·데모를 보고 **무엇이 특별한지**를 이름에 넣는다.
   예: OriginUI의 "Button with loading state" → `loading-button`.
3. 그래도 두 아이템이 같은 이름에 도달하면 `-<source>` 접미. 예: `loading-button-originui`.
   이때 사용자에게 왜 접미했는지 한 줄 보고한다.

## 예약 이름 — 등록 금지

shadcn/ui 기본 컴포넌트 이름으로는 아이템을 만들지 않는다.

```
accordion alert alert-dialog aspect-ratio avatar badge breadcrumb button
calendar card carousel chart checkbox collapsible command context-menu
dialog drawer dropdown-menu form hover-card input input-otp label menubar
navigation-menu pagination popover progress radio-group resizable scroll-area
select separator sheet sidebar skeleton slider sonner switch table tabs
textarea toggle toggle-group tooltip
```

이유: 우리 아이템은 기본 컴포넌트를 **대체**하는 게 아니라 **나란히** 쓰는 것이다.
같은 이름을 쓰면 소비자가 `@kidow/button` 과 `button` 중 뭘 설치했는지 추적 불가능해진다.

기본 컴포넌트의 변형을 담고 싶으면 → 특징 이름(`shimmer-button`)으로 만들고,
`registryDependencies` 에 원본 기본 컴포넌트(`"button"`)를 적는다.

## 설치 경로 충돌

이름 규칙과 별개로, 모든 아이템은 `files[].target` 을 `components/kidow/<파일명>` 으로 명시한다.
소비자의 `components/ui/` 를 물리적으로 건드리지 않으므로, 이름이 겹쳐도 기존 파일이 손상되지 않는다.

`shadcn add` 의 `--overwrite` 기본값은 `false` 다. 즉 target에 파일이 이미 있으면 **덮어쓰지 않고 건너뛴다** —
사용자 눈에는 "설치했는데 안 바뀜"으로 보인다. target 분리가 이 혼란을 애초에 없앤다.

## 같은 기능이 여러 출처에 있을 때

둘 다 담아도 된다. 그게 이 레지스트리의 목적이다.
단 `description` 에 차이를 한 줄로 적는다. 예:

- `shimmer-button` — "테두리를 도는 광택 애니메이션 버튼"
- `rainbow-button` — "무지개 그라디언트 테두리 버튼"

사용자가 "둘 중 뭐가 다른데?" 라고 묻지 않아도 되게 만든다.
