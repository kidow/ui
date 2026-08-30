'use client'

import {
  MorphingDialog,
  MorphingDialogClose,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogDescription,
  MorphingDialogTitle,
  MorphingDialogTrigger,
} from '@/components/kidow/morphing-dialog'

export default function MorphingDialogDemo() {
  return (
    <div className="flex min-h-40 items-center justify-center p-4">
      <MorphingDialog>
        <MorphingDialogTrigger className="w-56 rounded-xl border p-4 text-left">
          <MorphingDialogTitle className="text-sm font-medium">
            kidow/ui
          </MorphingDialogTitle>
          <MorphingDialogDescription className="text-muted-foreground text-xs">
            눌러서 펼쳐 보세요
          </MorphingDialogDescription>
        </MorphingDialogTrigger>
        <MorphingDialogContainer>
          <MorphingDialogContent className="bg-background w-80 rounded-xl border p-6">
            <MorphingDialogTitle className="text-lg font-semibold">
              kidow/ui
            </MorphingDialogTitle>
            <MorphingDialogDescription className="text-muted-foreground mt-2 text-sm">
              여러 UI 프레임워크의 컴포넌트를 한 레지스트리에 모았습니다.
            </MorphingDialogDescription>
            <MorphingDialogClose />
          </MorphingDialogContent>
        </MorphingDialogContainer>
      </MorphingDialog>
    </div>
  )
}
