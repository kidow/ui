'use client'

import { Confirmer, confirm } from '@/components/kidow/confirmer'
import { Button } from '@/components/ui/button'

export default function ConfirmerDemo() {
  return (
    <div className="flex flex-col items-center gap-3">
      <Confirmer />
      <Button
        variant="destructive"
        onClick={async () => {
          const ok = await confirm({
            title: '컴포넌트를 삭제할까요?',
            description: '레지스트리에서 제거되며 되돌릴 수 없습니다.',
          })
          if (ok) alert('삭제했습니다')
        }}
      >
        삭제
      </Button>
      <p className="text-muted-foreground text-xs">
        상태 변수 없이 await 로 결과를 받습니다
      </p>
    </div>
  )
}
