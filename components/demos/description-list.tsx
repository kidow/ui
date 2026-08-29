import {
  DescriptionDetail,
  DescriptionGroup,
  DescriptionList,
  DescriptionTerm,
} from '@/components/kidow/description-list'

export default function DescriptionListDemo() {
  return (
    <DescriptionList className="w-full max-w-sm">
      <DescriptionGroup>
        <DescriptionTerm>출처</DescriptionTerm>
        <DescriptionDetail>ui-x (junwen-k)</DescriptionDetail>
      </DescriptionGroup>
      <DescriptionGroup>
        <DescriptionTerm>라이선스</DescriptionTerm>
        <DescriptionDetail>MIT</DescriptionDetail>
      </DescriptionGroup>
      <DescriptionGroup>
        <DescriptionTerm>설치</DescriptionTerm>
        <DescriptionDetail>npx shadcn@latest add @kidow/description-list</DescriptionDetail>
      </DescriptionGroup>
    </DescriptionList>
  )
}
