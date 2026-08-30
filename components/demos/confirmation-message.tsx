'use client'

import ConfirmationMessage from '@/components/kidow/confirmation-message'

export default function ConfirmationMessageDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <ConfirmationMessage successMessage="수집" labelName="수집" labelMessage="수집" />
    </div>
  )
}
